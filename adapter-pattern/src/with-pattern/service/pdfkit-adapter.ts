import fs from "fs"
import PDFDocument from "pdfkit"
import { PdfAdapter } from "./pdf-adapter"

export class PdfKitAdapter implements PdfAdapter {
  public generate(filename: string, content: string): void {
    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
    })
    const stream = fs.createWriteStream(filename)
    doc.pipe(stream)
    doc.fontSize(16).text(content, 100, 100)
    doc.end()
    stream.on("finish", () => {
      console.log(`PDF generated: ${filename}`)
    })
  }
}

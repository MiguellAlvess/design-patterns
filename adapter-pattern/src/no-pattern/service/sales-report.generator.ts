import fs from "fs"
import PDFDocument from "pdfkit"

export class SalesReportGenerator {
  public generate(): void {
    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
    })
    const filename = `${Date.now()}.pdf`
    const stream = fs.createWriteStream(filename)
    doc.pipe(stream)
    doc.fontSize(16).text("Content of sales report", 100, 100)
    doc.end()
    stream.on("finish", () => {
      console.log(`PDF generated: ${filename}`)
    })
  }
}

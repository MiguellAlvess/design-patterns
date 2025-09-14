import { PdfAdapter } from "./pdf-adapter"

export class SalesReportGenerator {
  constructor(private pdfAdapter: PdfAdapter) {}

  public generate(): void {
    const filename = `${Date.now()}.pdf`
    const content = "Sales Report"

    this.pdfAdapter.generate(filename, content)
  }
}

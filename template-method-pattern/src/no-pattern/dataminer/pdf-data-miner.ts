export class PdfDataMiner {
  public mine(path: string): void {
    const fileContent = this.openFile(path)
    const rawData = this.extractPdfData(fileContent)
    const data = this.parsePdfData(rawData)
    const analysisResult = this.analyzeData(data)
    this.sendReport(analysisResult)
  }

  private openFile(path: string): string {
    return "...file content PDF"
  }

  private extractPdfData(fileContent: string): Record<string, string> {
    return { raw_data_pdf: "..." }
  }

  private parsePdfData(
    rawData: Record<string, string>,
  ): Record<string, string> {
    return { parsed_data_pdf: "..." }
  }

  private analyzeData(data: Record<string, string>): string {
    return "analysis result PDF"
  }

  private sendReport(analysisResult: string): void {
    console.log("Report sent:", analysisResult)
  }
}

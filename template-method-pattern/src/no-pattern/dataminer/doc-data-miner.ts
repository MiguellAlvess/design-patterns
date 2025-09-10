export class DocDataMiner {
  public mine(path: string): void {
    const fileContent = this.openFile(path)
    const rawData = this.extractDocData(fileContent)
    const data = this.parseDocData(rawData)
    const analysisResult = this.analyzeData(data)
    this.sendReport(analysisResult)
  }

  private openFile(path: string): string {
    return "...file content DOC"
  }

  private extractDocData(fileContent: string): Record<string, string> {
    return { raw_data_doc: "..." }
  }

  private parseDocData(
    rawData: Record<string, string>,
  ): Record<string, string> {
    return { parsed_data_doc: "..." }
  }

  private analyzeData(data: Record<string, string>): string {
    return "analysis result DOC"
  }

  private sendReport(analysisResult: string): void {
    console.log("Report sent:", analysisResult)
  }
}

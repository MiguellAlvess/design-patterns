export abstract class DataMiner {
  public mine(path: string): void {
    const fileContent = this.openFile(path)
    const rawData = this.extractData(fileContent)
    const data = this.parseData(rawData)
    const analysisResult = this.analyzeData(data)
    this.sendReport(analysisResult)
  }

  protected abstract openFile(path: string): string

  protected abstract extractData(fileContent: string): Record<string, string>

  protected abstract parseData(
    rawData: Record<string, string>,
  ): Record<string, string>

  protected abstract parseData(
    rawData: Record<string, string>,
  ): Record<string, string>

  protected analyzeData(data: Record<string, string>): string {
    return "analysis result DOC"
  }

  protected sendReport(analysisResult: string): void {
    console.log("Report sent:", analysisResult)
  }
}

import { DataMiner } from "./data-miner"

export class PdfDataMiner extends DataMiner {
  protected openFile(path: string): string {
    return "...file content PDF"
  }

  protected extractData(fileContent: string): Record<string, string> {
    return { raw_data_pdf: "..." }
  }

  protected parseData(rawData: Record<string, string>): Record<string, string> {
    return { parsed_data_pdf: "..." }
  }
}

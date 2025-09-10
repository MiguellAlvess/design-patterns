import { DataMiner } from "./data-miner"

export class DocDataMiner extends DataMiner {
  protected openFile(path: string): string {
    return "...file content DOC"
  }

  protected extractData(fileContent: string): Record<string, string> {
    return { raw_data_doc: "..." }
  }

  protected parseData(rawData: Record<string, string>): Record<string, string> {
    return { parsed_data_doc: "..." }
  }
}

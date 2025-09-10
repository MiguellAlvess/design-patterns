import { DataMiner } from "./data-miner"

export class CsvDataMiner extends DataMiner {
  protected openFile(path: string): string {
    return "...file content CSV"
  }

  protected extractData(fileContent: string): Record<string, string> {
    return { raw_data_csv: "..." }
  }

  protected parseData(rawData: Record<string, string>): Record<string, string> {
    return { parsed_data_csv: "..." }
  }
}

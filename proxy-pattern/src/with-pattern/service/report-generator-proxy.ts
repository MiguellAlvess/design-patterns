import { Report } from "@prisma/client"
import { ReportGeneratorInterface } from "./report-generator-interface.js"
import { ReportGenerator } from "./report-generator.js"
import NodeCache from "node-cache"

export class ReportGeneratorProxyCache implements ReportGeneratorInterface {
  private cache: NodeCache

  constructor(private reportGenerator: ReportGenerator) {
    this.cache = new NodeCache({ stdTTL: 3600 })
  }
  public generate(report: Report): string[] {
    const cacheKey = `report_${report.id}`
    const cached = this.cache.get<string[]>(cacheKey)
    if (cached) {
      return cached
    }
    const reportData = this.reportGenerator.generate(report)
    this.cache.set(cacheKey, reportData)
    return reportData
  }
}

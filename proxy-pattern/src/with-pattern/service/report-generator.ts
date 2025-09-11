import { Report } from "@prisma/client"
import { ReportGeneratorInterface } from "./report-generator-interface.js"

export class ReportGenerator implements ReportGeneratorInterface {
  public generate(report: Report): string[] {
    return [`Conteúdo do relatório ${report.id}`]
  }
}

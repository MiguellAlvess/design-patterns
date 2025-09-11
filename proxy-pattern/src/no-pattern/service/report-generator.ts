import { Report } from "@prisma/client"

export class ReportGenerator {
  public generate(report: Report): string[] {
    return [`Conteúdo do relatório ${report.id}`]
  }
}

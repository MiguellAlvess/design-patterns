import { Report } from "@prisma/client"

export interface ReportGeneratorInterface {
  generate(report: Report): string[]
}

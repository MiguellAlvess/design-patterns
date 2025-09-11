import { PrismaClient, Report } from "@prisma/client"

const prisma = new PrismaClient()

export class ReportRepository {
  async find(id: number): Promise<Report | null> {
    return prisma.report.findUnique({ where: { id } })
  }
}

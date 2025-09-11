import { Router, Request, Response } from "express"
import { ReportRepository } from "../repository/report-repository.js"
import { ReportGenerator } from "../service/report-generator.js"

export class ReportGeneratorController {
  public router: Router

  constructor(
    private readonly reportRepository: ReportRepository,
    private readonly reportGenerator: ReportGenerator,
  ) {
    this.router = Router()
    this.router.get("/reports/:id/generate", this.generate)
  }
  private generate = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id)
    const report = await this.reportRepository.find(id)

    if (!report) {
      res.status(404).json({ error: "Report not found" })
      return
    }

    const reportData = await this.reportGenerator.generate(report)
    res.json({ data: reportData })
  }
}

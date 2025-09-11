import { ReportRepository } from "../repository/report-repository.js"

export class Report {
  private id: number | null = null

  constructor(private readonly repository?: ReportRepository) {}

  public getId(): number | null {
    return this.id
  }
}

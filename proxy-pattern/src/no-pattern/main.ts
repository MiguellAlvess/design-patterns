import express from "express"
import { ReportRepository } from "./repository/report-repository.js"
import { ReportGenerator } from "./service/report-generator.js"
import { ReportGeneratorController } from "./controller/report-generator.js"

const app = express()

const reportRepository = new ReportRepository()
const reportGenerator = new ReportGenerator()
const reportController = new ReportGeneratorController(
  reportRepository,
  reportGenerator,
)

app.use(reportController.router)

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})

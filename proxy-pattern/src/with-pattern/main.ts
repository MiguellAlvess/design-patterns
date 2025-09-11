import express from "express"
import { ReportRepository } from "./repository/report-repository.js"
import { ReportGenerator } from "./service/report-generator.js"
import { ReportGeneratorController } from "./controller/report-generator.js"
import { ReportGeneratorProxyCache } from "./service/report-generator-proxy.js"

const app = express()

const reportRepository = new ReportRepository()
const reportGeneratorProxyCache = new ReportGeneratorProxyCache(
  new ReportGenerator(),
)
const reportController = new ReportGeneratorController(
  reportRepository,
  reportGeneratorProxyCache,
)

app.use(reportController.router)

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})

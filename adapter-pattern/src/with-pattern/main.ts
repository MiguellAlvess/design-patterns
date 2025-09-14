import { PdfKitAdapter } from "./service/pdfkit-adapter"
import { SalesReportGenerator } from "./service/sales-report.generator"

const pdfAdapter = new PdfKitAdapter()
const salesReportGenerator = new SalesReportGenerator(pdfAdapter)
salesReportGenerator.generate()

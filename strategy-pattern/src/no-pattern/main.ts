import express from "express"
import { TaxController } from "./controller/tax-controller.js"
import { TaxCalculator } from "./service/tax-calculator.js"

const app = express()
app.use(express.json())

const taxController = new TaxController(new TaxCalculator())
app.use(taxController.router)

app.listen(8080, () => {
  console.log("Server is running on port 8080")
})

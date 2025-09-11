import express, { Request, Response, Router } from "express"
import { TaxCalculator } from "../service/tax-calculator.js"

export class TaxController {
  public router: Router

  constructor(private readonly taxCalculator: TaxCalculator) {
    this.router = express.Router()
    this.router.post("/tax/calculate", this.calculate)
  }

  private calculate = (req: Request, res: Response): void => {
    const data = req.body

    const taxType: string = data.taxType
    const amount: number = data.amount

    const tax = this.taxCalculator.calculate(taxType, amount)

    res.json({ tax })
  }
}

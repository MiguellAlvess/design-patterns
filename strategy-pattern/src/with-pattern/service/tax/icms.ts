import { TaxTypeInterface } from "src/with-pattern/contracts/tax-type-interface.js"

export class ICMS implements TaxTypeInterface {
  calculate(amount: number): number {
    return amount * 0.17 // ICMS tax rate of 17%
  }

  getTaxName(): string {
    return "ICMS"
  }
}

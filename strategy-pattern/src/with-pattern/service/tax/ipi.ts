import { TaxTypeInterface } from "src/with-pattern/contracts/tax-type-interface.js"

export class IPI implements TaxTypeInterface {
  calculate(amount: number): number {
    return (amount * 0.5) / 100
  }

  getTaxName(): string {
    return "IPI"
  }
}

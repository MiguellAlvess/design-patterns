import { TaxTypeInterface } from "src/with-pattern/contracts/tax-type-interface.js"
export class ISS implements TaxTypeInterface {
  calculate(amount: number): number {
    return (amount * 0.11) / 100
  }

  getTaxName(): string {
    return "ISS"
  }
}

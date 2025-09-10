import { BitcoinPriceObserver } from "./bitcoin-price-observer"

export class InvestorNotifier implements BitcoinPriceObserver {
  notify(price: number): void {
    console.log(`Notifying investors about Bitcoin price change: $${price}`)
  }
  update(price: number): void {
    this.notify(price)
  }
}

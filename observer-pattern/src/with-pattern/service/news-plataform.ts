import { BitcoinPriceObserver } from "./bitcoin-price-observer"

export class NewsPlataform implements BitcoinPriceObserver {
  update(price: number): void {
    console.log(`Notifying investors about Bitcoin price change: $${price}`)
  }
}

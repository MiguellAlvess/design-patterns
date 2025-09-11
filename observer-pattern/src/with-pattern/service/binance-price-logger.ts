import { BitcoinPriceObserver } from "./bitcoin-price-observer"

export class BinancePriceLogger implements BitcoinPriceObserver {
  log(price: number): void {
    console.log(`Binance price: $${price}`)
  }
  update(price: number): void {
    this.log(price)
  }
}

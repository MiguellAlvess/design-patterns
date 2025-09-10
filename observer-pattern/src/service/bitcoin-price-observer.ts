export interface BitcoinPriceObserver {
  update(price: number): void
}

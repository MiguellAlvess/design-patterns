import { BitcoinPriceObserver } from "@/with-pattern/service/bitcoin-price-observer"

export class Bitcoin {
  constructor(
    private price: number,
    private observers: any[] = [],
  ) {}

  public setPrice(newPrice: number): void {
    if (newPrice === this.price) return
    this.price = newPrice
    this.notifyObservers()
  }

  public getPrice(): number {
    return this.price
  }

  public addObservers(observer: BitcoinPriceObserver): void {
    this.observers.push(observer)
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }
}

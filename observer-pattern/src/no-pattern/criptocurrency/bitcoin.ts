export class Bitcoin {
  private price: number = 0

  constructor(price: number = 0) {
    this.price = price
  }

  public setPrice(newPrice: number): void {
    if (newPrice !== this.price) {
      this.price = newPrice
    }
  }

  public getPrice(): number {
    return this.price
  }
}

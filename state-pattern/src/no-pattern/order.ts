export class Order {
  constructor(private status: string = "placed") {}

  getStatus(): string {
    return this.status
  }

  setStatus(status: string): void {
    this.status = status
  }
}

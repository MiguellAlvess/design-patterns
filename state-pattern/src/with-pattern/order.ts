import { OrderState } from "./order-state"
import { Placed } from "./placed"

export class Order {
  constructor(private orderState: OrderState = new Placed()) {}

  setEstado(orderState: OrderState): void {
    this.orderState = orderState
  }

  prepare(): void {
    this.orderState.prepare(this)
  }

  startDelivery(): void {
    this.orderState.startDelivery(this)
  }

  finishDelivery(): void {
    this.orderState.finishDelivery(this)
  }
}

import { Order } from "./order"
import { OrderState } from "./order-state"
import { Preparing } from "./preparing"

export class Placed implements OrderState {
  prepare(order: Order): void {
    order.setEstado(new Preparing())
  }
  startDelivery(order: Order): void {
    throw new Error("Order has not yet been prepared")
  }
  finishDelivery(order: Order): void {
    throw new Error("Order has not yet been prepared")
  }
}

import { Order } from "./order"
import { OrderState } from "./order-state"

export class FinishDelivery implements OrderState {
  prepare(order: Order): void {
    throw new Error("Method not implemented.")
  }
  startDelivery(order: Order): void {
    throw new Error("Method not implemented.")
  }
  finishDelivery(order: Order): void {
    throw new Error("Method not implemented.")
  }
}

import { FinishDelivery } from "./finish-delivery"
import { Order } from "./order"
import { OrderState } from "./order-state"

export class StartDelivery implements OrderState {
  prepare(order: Order): void {
    throw new Error("Order is already being prepared")
  }
  startDelivery(order: Order): void {
    throw new Error("Order is already out for delivery")
  }
  finishDelivery(order: Order): void {
    order.setEstado(new FinishDelivery())
  }
}

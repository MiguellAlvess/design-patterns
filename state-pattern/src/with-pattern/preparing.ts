import { Order } from "./order"
import { OrderState } from "./order-state"
import { StartDelivery } from "./start-delivery"

export class Preparing implements OrderState {
  prepare(order: Order): void {
    throw new Error("Order is already being prepared")
  }
  startDelivery(order: Order): void {
    order.setEstado(new StartDelivery())
  }
  finishDelivery(order: Order): void {
    throw new Error("Order cannot be finalized as it is still being prepared")
  }
}

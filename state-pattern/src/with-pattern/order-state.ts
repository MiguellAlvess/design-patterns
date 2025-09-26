import { Order } from "./order"

export interface OrderState {
  prepare(order: Order): void
  startDelivery(order: Order): void
  finishDelivery(order: Order): void
}

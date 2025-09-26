import { Order } from "./order"

const order = new Order()
order.getStatus()
order.setStatus("DeliveryStarted")

if (order.getStatus() === "DeliveryStarted") {
  order.setStatus("Notifying the customer")
}

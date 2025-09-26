import { Order } from "./order"

const order = new Order()

order.prepare()
order.startDelivery()
order.finishDelivery()
console.log(order)

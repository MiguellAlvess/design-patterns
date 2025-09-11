import express from "express"
import { OrderController } from "./controller/order-controller"
import { InventoryManager } from "./service/inventory-manager"
import { Notifier } from "./service/notifier"
import { PaymentProcessor } from "./service/payment-processor"
import { ShippingService } from "./service/shipping-service"

const app = express()
app.use(express.json())

const orderController = new OrderController(
  new PaymentProcessor(),
  new Notifier(),
  new InventoryManager(),
  new ShippingService(),
)

app.use(orderController.router)

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})

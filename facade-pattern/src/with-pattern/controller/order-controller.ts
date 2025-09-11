import { Request, Response, Router } from "express"
import { InventoryManager } from "../service/inventory-manager"
import { Notifier } from "../service/notifier"
import { PaymentProcessor } from "../service/payment-processor"
import { ShippingService } from "../service/shipping-service"
import { OrderFacade } from "../service/order-facade"

export class OrderController {
  public router: Router

  constructor(private orderFacade: OrderFacade) {
    this.router = Router()
    this.router.post("/api/order", this.newOrder)
  }

  private newOrder = async (req: Request, res: Response): Promise<void> => {
    const orderDetails = req.body.orderDetails

    await this.orderFacade.processOrder(orderDetails)

    res.json({ message: "Pedido realizado com sucesso" })
  }
}

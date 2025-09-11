import { Request, Response, Router } from "express"
import { InventoryManager } from "../service/inventory-manager"
import { Notifier } from "../service/notifier"
import { PaymentProcessor } from "../service/payment-processor"
import { ShippingService } from "../service/shipping-service"

export class OrderController {
  public router: Router

  constructor(
    private readonly paymentProcessor: PaymentProcessor,
    private readonly notifier: Notifier,
    private readonly inventoryManager: InventoryManager,
    private readonly shippingService: ShippingService,
  ) {
    this.router = Router()
    this.router.post("/api/order", this.newOrder)
  }

  private newOrder = async (req: Request, res: Response): Promise<void> => {
    const orderDetails = req.body.orderDetails

    this.paymentProcessor.processPayment(orderDetails.amount)
    this.notifier.sendConfirmation(orderDetails.email)
    this.inventoryManager.updateStock(
      orderDetails.productId,
      orderDetails.quantity,
    )
    this.shippingService.initiateShipping(orderDetails)

    res.json({ message: "Pedido realizado com sucesso" })
  }
}

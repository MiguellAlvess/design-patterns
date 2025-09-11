import { InventoryManager } from "./inventory-manager"
import { Notifier } from "./notifier"
import { PaymentProcessor } from "./payment-processor"
import { ShippingService } from "./shipping-service"

export class OrderFacade {
  constructor(
    private readonly paymentProcessor: PaymentProcessor,
    private readonly notifier: Notifier,
    private readonly inventoryManager: InventoryManager,
    private readonly shippingService: ShippingService,
  ) {}

  public processOrder(orderDetails: any): void {
    this.paymentProcessor.processPayment(orderDetails.amount)
    this.notifier.sendConfirmation(orderDetails.email)
    this.inventoryManager.updateStock(
      orderDetails.productId,
      orderDetails.quantity,
    )
    this.shippingService.initiateShipping(orderDetails)
  }
}

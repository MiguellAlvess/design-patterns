export class ShippingService {
  initiateShipping(orderDetails: any): void {
    console.log(
      `Initiating shipping for order: ${JSON.stringify(orderDetails)}`,
    )
  }
}

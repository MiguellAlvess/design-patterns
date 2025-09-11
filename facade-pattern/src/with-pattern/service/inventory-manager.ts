export class InventoryManager {
  updateStock(productId: string, quantity: number): void {
    console.log(
      `Updating stock for product ${productId} with quantity ${quantity}`,
    )
  }
}

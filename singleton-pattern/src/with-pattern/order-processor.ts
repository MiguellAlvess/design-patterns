import { Logger } from "./logger"

export class OrderProcessor {
  public processOrder(orderId: string): void {
    const logger = Logger.getInstance()
    logger.log(`Processing order with ID: ${orderId}`)
    logger.log(`Order with ID: ${orderId} has been processed successfully`)
    console.log("High hidden")
  }
}

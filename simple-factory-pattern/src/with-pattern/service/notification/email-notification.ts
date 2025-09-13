import { NotificationType } from "./notification-type"

export class EmailNotification implements NotificationType {
  public send(message: string, recipient: string): void {
    console.log(`Send email to ${recipient}: ${message}`)
  }
}

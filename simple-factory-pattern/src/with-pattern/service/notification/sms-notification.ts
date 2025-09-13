import { NotificationType } from "./notification-type"

export class SmsNotification implements NotificationType {
  public send(message: string, recipient: string): void {
    console.log(`Send sms to ${recipient}: ${message}`)
  }
}

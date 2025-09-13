import { NotificationType } from "./notification-type"

export class SlackNotification implements NotificationType {
  public send(message: string, recipient: string): void {
    console.log(`Send slack message to ${recipient}: ${message}`)
  }
}

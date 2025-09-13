import { EmailNotification } from "./email-notification"
import { NotificationType } from "./notification-type"
import { SlackNotification } from "./slack-notification"
import { SmsNotification } from "./sms-notification"

export class NotificationFactory {
  public static create(notificationType: string): NotificationType {
    if (notificationType === "email") {
      return new EmailNotification()
    }

    if (notificationType === "sms") {
      return new SmsNotification()
    }

    if (notificationType === "slack") {
      return new SlackNotification()
    }

    throw new Error("Invalid notification type")
  }
}

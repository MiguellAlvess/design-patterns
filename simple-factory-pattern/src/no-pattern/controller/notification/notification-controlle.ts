import { EmailNotification } from "@/no-pattern/service/notification/email-notification"
import { SlackNotification } from "@/no-pattern/service/notification/slack-notification"
import { SmsNotification } from "@/no-pattern/service/notification/sms-notification"
import { Request, Response } from "express"

export class NotificationController {
  public sendNotification(req: Request, res: Response): Response {
    const notificationType = req.query.notificationType as string
    const recipient = req.query.recipient as string
    const message = req.query.message as string

    let notification: any

    if (notificationType === "email") {
      notification = new EmailNotification()
    }

    if (notificationType === "sms") {
      notification = new SmsNotification()
    }

    if (notificationType === "slack") {
      notification = new SlackNotification()
    }

    notification.send(message, recipient)

    return res.send("Notification sent successfully")
  }
}

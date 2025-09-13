import { NotificationFactory } from "@/with-pattern/service/notification/notification-factory"
import { Request, Response } from "express"

export class NotificationController {
  public sendNotification(req: Request, res: Response): Response {
    const notificationType = req.query.notificationType as string
    const recipient = req.query.recipient as string
    const message = req.query.message as string

    let notification: any

    notification = NotificationFactory.create(notificationType)

    notification.send(message, recipient)

    return res.send("Notification sent successfully")
  }
}

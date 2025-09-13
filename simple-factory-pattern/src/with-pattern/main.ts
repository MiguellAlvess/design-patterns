import express, { Request, Response } from "express"
import { NotificationController } from "./controller/notification/notification-controlle"

const app = express()
const controller = new NotificationController()

app.get("/api/send-notification", (req: Request, res: Response) => {
  return controller.sendNotification(req, res)
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

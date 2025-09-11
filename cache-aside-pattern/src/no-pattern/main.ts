import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.get("/", async (_req: Request, res: Response) => {
  const featuredCategories = await prisma.category.findMany({
    where: { isFeatured: true },
    select: { id: true, name: true, imageUrl: true },
  })

  res.json(featuredCategories)
})

app.listen(8080, () => {
  console.log("Server is running on port 8080!")
})

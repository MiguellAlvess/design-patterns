import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import redisClient from "./config/redis.js"

const app = express()
const prisma = new PrismaClient()

app.get("/", async (req: Request, res: Response) => {
  const cacheKey = "featured-categories"

  try {
    const cachedCategories = await redisClient.get(cacheKey)
    if (cachedCategories) {
      return res.json(JSON.parse(cachedCategories))
    }

    const featuredCategories = await prisma.category.findMany({
      where: {
        isFeatured: true,
      },
    })

    await redisClient.setEx(cacheKey, 20, JSON.stringify(featuredCategories))

    res.json(featuredCategories)
  } catch (error) {
    console.error("Error searching categories", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

app.listen(8080, () => {
  console.log("Server is running on port 8080!")
})

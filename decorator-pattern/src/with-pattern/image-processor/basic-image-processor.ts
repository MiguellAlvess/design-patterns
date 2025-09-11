import fs from "node:fs"
import path from "node:path"
import { ImageProcessorInterface } from "./image-processor-interface"

export class BasicImageProcessor implements ImageProcessorInterface {
  process(imagePath: string): string {
    console.log(`Processing image: ${imagePath}`)
    const uploadsDir = path.resolve(process.cwd(), "uploads")
    fs.mkdirSync(uploadsDir, { recursive: true })
    const newImagePath = path.join(uploadsDir, "file.jpg")
    fs.writeFileSync(newImagePath, "")

    return newImagePath
  }
}

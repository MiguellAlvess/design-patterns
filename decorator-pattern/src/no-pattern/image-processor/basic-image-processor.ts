import { ImageProcessorInterface } from "./image-processor-interface"
import fs from "fs"

export class BasicImageProcessor implements ImageProcessorInterface {
  process(imagePath: string): string {
    console.log(`Processing image: ${imagePath}`)
    const newImagePath = "uploads/file.jpg"
    fs.writeFileSync(newImagePath, "")
    return newImagePath
  }
}

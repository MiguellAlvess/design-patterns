import { ImageProcessorInterface } from "./image-processor-interface"
import fs from "fs"
import path from "path"

export class ResizeImageProcessorDecorator implements ImageProcessorInterface {
  constructor(
    private imageProcessor: ImageProcessorInterface,
    private width: number,
    private height: number,
  ) {}

  process(imagePath: string): string {
    const processedImagePath = this.imageProcessor.process(imagePath)
    console.log(`Resizing image to ${this.width}x${this.height}...`)
    const uploadsDir = path.resolve(process.cwd(), "uploads")
    fs.mkdirSync(uploadsDir, { recursive: true })
    const newImagePath = path.join(uploadsDir, "resized-file.jpg")
    fs.writeFileSync(newImagePath, "")
    return newImagePath
  }
}

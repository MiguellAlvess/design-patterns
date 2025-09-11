import { ImageProcessorInterface } from "./image-processor-interface"
import fs from "fs"
import path from "path"

export class WatermarkImageProcessorDecorator
  implements ImageProcessorInterface
{
  constructor(
    private imageProcessor: ImageProcessorInterface,
    private watermark: string,
  ) {}

  process(imagePath: string): string {
    const processedImagePath = this.imageProcessor.process(imagePath)
    console.log("Adding watermark to image...")
    const uploadsDir = path.resolve(process.cwd(), "uploads")
    fs.mkdirSync(uploadsDir, { recursive: true })
    const newImagePath = path.join(uploadsDir, "watermarked-file.jpg")
    fs.writeFileSync(newImagePath, "")
    return newImagePath
  }
}

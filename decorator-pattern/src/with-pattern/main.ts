import { BasicImageProcessor } from "./image-processor/basic-image-processor"
import { ImageProcessorInterface } from "./image-processor/image-processor-interface"
import { ResizeImageProcessorDecorator } from "./image-processor/resize-image-process"
import { WatermarkImageProcessorDecorator } from "./image-processor/watermark-image-processor"

const imagePath = "/tmp/file.jpg"

let imageProcessor: ImageProcessorInterface = new BasicImageProcessor()

imageProcessor = new WatermarkImageProcessorDecorator(imageProcessor, "test")

imageProcessor = new ResizeImageProcessorDecorator(imageProcessor, 800, 600)

imageProcessor.process(imagePath)

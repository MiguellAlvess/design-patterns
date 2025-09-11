import { BasicImageProcessor } from "./image-processor/basic-image-processor"

const imagePath = "/tmp/file.jpg"
const imageProcessor = new BasicImageProcessor()
imageProcessor.process(imagePath)

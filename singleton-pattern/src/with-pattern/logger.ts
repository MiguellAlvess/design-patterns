import * as fs from "fs"
import * as path from "path"
import * as os from "os"

export class Logger {
  private static instance: Logger | null = null
  private logFile: string

  private constructor() {
    this.logFile = "app.log"
  }

  public static getInstance(): Logger {
    if (this.instance === null) {
      this.instance = new Logger()
    }
    return this.instance
  }

  public log(message: string): void {
    const filePath = path.resolve(this.logFile)
    const time = new Date().toISOString().replace("T", " ").substring(0, 19)
    const logMessage = `[${time}] ${message}${os.EOL}`
    fs.appendFileSync(filePath, logMessage, { encoding: "utf8" })
  }
}

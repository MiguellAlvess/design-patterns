import * as fs from "fs";
import * as path from "path";

export class Logger {
  public log(logFile: string, message: string): void {
    const filePath = path.resolve(logFile);
    const time = new Date().toISOString().replace("T", " ").substring(0, 19);
    const logMessage = `[${time}] ${message}${require("os").EOL}`;
    fs.appendFileSync(filePath, logMessage, { encoding: "utf8" });
  }
}

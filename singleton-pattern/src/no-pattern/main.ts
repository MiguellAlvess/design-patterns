import { Logger } from "./logger";

const logger = new Logger();
logger.log("app.log", "This is a log message without singleton pattern.");

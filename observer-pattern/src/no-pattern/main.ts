import { BinanceAPI } from "./criptocurrency/binance-api"
import { Bitcoin } from "./criptocurrency/bitcoin"

const bitcoin = new Bitcoin()
const binanceApi = new BinanceAPI()
const newPrice = binanceApi.getLastPrice()
bitcoin.setPrice(newPrice)

import { BinanceAPI } from "./criptocurrency/binance-api"
import { Bitcoin } from "./criptocurrency/bitcoin"
import { BinancePriceLogger } from "./service/binance-price-logger"
import { InvestorNotifier } from "./service/investor-notifier"
import { NewsPlataform } from "./service/news-plataform"

const bitcoin = new Bitcoin(0)

const binanceApi = new BinanceAPI()
const newPrice = binanceApi.getLastPrice()

bitcoin.addObservers(new BinancePriceLogger())
bitcoin.addObservers(new InvestorNotifier())
bitcoin.addObservers(new NewsPlataform())

bitcoin.setPrice(newPrice)

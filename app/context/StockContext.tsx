import { createContext, Dispatch, SetStateAction } from "react"
interface StockContextValue {
    stockSymbol: string
    setStockSymbol: Dispatch<SetStateAction<string>>
}
const StockContext = createContext<StockContextValue>({} as StockContextValue)

export default StockContext
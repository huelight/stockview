const basePath = "https://finnhub.io/api/v1"
const apiKey = process.env.REACT_APP_API_KEY;

export const searchSymbol = async (query: string) => {
    const url = `${basePath}/search?q=${query}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message)
    }
    return await response.json()
}

export const fetchStockDetails = async (stockSymbol: any) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message)
    }
    return await response.json()
}

export const fetchQuote = async (stockSymbol: any) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message)
    }
    return await response.json()
}

export const  fetchHistoricalData = async (stockSymbol: string, resolution: string, from:string, to: string) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message)
    }
    return await response.json()

}
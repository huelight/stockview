import { useContext } from "react"

import ThemeContext from "~/context/ThemeContext"
import Card from "../cards/card"

const Details = ({ details }: any) => {
    
    const { darkMode } = useContext(ThemeContext);
    
    const detailsList: Record<string, string> = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry",
    };


    const convertMillionToBillion = (number: number): string => {
        const result = (number / 1000).toFixed(2);
        return result;
    };

    return (
        <>
            <Card>
                <ul className={`w-full h-full flex flex-col justify-between divide-y-1 ${darkMode ? "divide-gray-800" : undefined}`}>
                    {Object.keys(detailsList).map((item) => {
                        return (
                            <li key={item} className="flex-1 flex justify-between items-center">
                                <span>{detailsList[item]}</span>
                                <span>{item === "marketCapitalization" ? `${convertMillionToBillion(details[item])}B` : details[item]  }</span>
                            </li>
                        )
                    })}
                </ul>
            </Card>
        </>
    )
}

export default Details
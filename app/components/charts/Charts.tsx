import { useState, useContext, useEffect } from "react"
import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from "recharts";

import { chartConfig } from "~/constants/config"
import { convertUnixTimeStampToDate, convertDateToUnixTimeStamp, createDate } from "~/helpers/data-helper";
import ThemeContext from "~/context/ThemeContext"
import Card from "../cards/card";
import ChartFilter from "./ChartFilter";
import { fetchHistoricalData } from "~/api/stock-api";
import StockContext from "~/context/StockContext";

const Chart = () => {
    const { darkMode} = useContext(ThemeContext);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState<keyof typeof chartConfig>("1W");


    const { stockSymbol } = useContext(StockContext)

    const formatData = (data: any) => {
        return data.c.map((item: any, index: any) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimeStampToDate(data.t[index])
            }
        })
    }
    
    useEffect(() => {
        const getDateRange = () => { 
            const { days, weeks, months, years } = chartConfig[filter];
            const endDate = new Date;
            const startDate = createDate(endDate, -days, -weeks, -months, -years);
            
            const startTimeStampUnix = convertDateToUnixTimeStamp(startDate);
            const endTimeStaampUnix = convertDateToUnixTimeStamp(endDate);

            return {startTimeStampUnix, endTimeStaampUnix}
        }
        const updateChartDate = async () => {
            try {
                const { startTimeStampUnix, endTimeStaampUnix } = getDateRange();
                const resolution = chartConfig[filter].resolution
                const result = await fetchHistoricalData(stockSymbol, resolution, startTimeStampUnix.toString(), endTimeStaampUnix.toString())
                setData(formatData(result))
            }
            catch (error) {
                setData([])
                console.log(error)
            }

        }

        updateChartDate();
    }, [stockSymbol, filter])

    

    return (
        <>
            <Card>
                <ul className="flex absolute top-2 right-2 z-40 border-2 rounded-lg ">
                    {Object.keys(chartConfig).map((item) => {
                        return (
                            <li key={item}>
                                <ChartFilter
                                    text={item}
                                    active={filter == item}
                                    onClick={() => {
                                        setFilter(item as "1D" | "1W" | "1M" | "1Y")
                                            // console.log("I was clicked");
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
                <ResponsiveContainer>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor= {darkMode ? "#312e81": "rgb(199 210 254)"}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={darkMode ? "#312e81": "rgb(199 210 254)"}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="'312e81" fillOpacity={1} strokeWidth={0.5} fill="url(#chartColor)" />
                        <Tooltip
                            contentStyle={darkMode ? { backgroundColor: "#111827" } : undefined}
                            itemStyle ={darkMode ? {color: "#818cf8"} : undefined}
                        />
                        <XAxis dataKey={"date"} />
                        <YAxis domain={["dataMin", "dataMax"]} />
                    </AreaChart>
                </ResponsiveContainer>
            </Card>
        </>
    )

}

export default Chart
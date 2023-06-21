import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Dashboard from "~/components/dashboard/Dashboard";
import StockContext from "~/context/StockContext";
import ThemeContext from "~/context/ThemeContext";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [stockSymbol, setStockSymbol] = useState("GOOG")

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
        <Dashboard />
        </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

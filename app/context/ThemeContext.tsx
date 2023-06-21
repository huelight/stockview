import { createContext, Dispatch, SetStateAction } from "react"


interface ThemeContextValue {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}


const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export default ThemeContext;
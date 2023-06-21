import { useContext } from "react"
import ThemeContext from "~/context/ThemeContext"
import { BsFillMoonStarsFill, BsFillSunriseFill } from "react-icons/bs"

const ThemeIcon = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <>
            <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${darkMode ? "shadow-gray-800" : null}`} onClick={toggleDarkMode}>
                {darkMode ? 
                    <BsFillMoonStarsFill className={`h-8 w-8 cursor-pointer stroke-1 fill-none fill-yellow-400 stroke-yellow-400 `} />
                    :
                    <BsFillSunriseFill className={`h-8 w-8 cursor-pointer stroke-1 fill-gray-300  stroke-yellow-400 `} />
                }
                
            </button>
        </>
    )
}

export default ThemeIcon
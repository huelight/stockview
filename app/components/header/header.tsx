import Search from "../search/Search"
import ThemeIcon from "../theme-icon/ThemeIcon"

const Header = ({name}: any) => {
    return (
        <>
            <div className="xl-px-32">
         <h1 className="text-5xl">{name}</h1>
                <Search />
            </div>
            <ThemeIcon />
            </>
    )
}
export default Header
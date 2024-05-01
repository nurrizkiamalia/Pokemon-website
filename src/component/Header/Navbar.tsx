import { Link } from "react-router-dom"
import logo from  '/logo.png'
import SearchField from "./SearchField"
import { PokemonProvider } from "../../context/PokemonContext"

interface  Props{
    isOpen?: boolean,
}

const Navbar: React.FC<Props> = (isOpen) =>{

    return(
        <>
            <div className=" bg-darkBlue max-h-[70px] relative flex flex-row items-center justify-between px-[21px] py-[6px]">
                <Link to="/"><img src={logo} alt="Logo" className="w-fit h-fit" /></Link>
                <div className=" w-fit bg-transparent hover:shadow-xl px-3 py-1 rounded text-right overflow-hidden">
                    {isOpen ? (
                        <PokemonProvider>
                            <SearchField />
                        </PokemonProvider>
                    ) : null}
                </div>
            </div>
            <hr className=" border-blueLight" />
        </>
    )
}

export default Navbar
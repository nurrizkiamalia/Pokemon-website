import { useCallback, useEffect, useState, useContext } from "react"
import searchIcon from "../../../public/assets/search.png"
import { useNavigate } from "react-router-dom"
import PokemonContext, {PokemonContextType} from "../../context/PokemonContext"

const SearchField: React.FC = () => {
    const [editing, setEditing] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filteredPokemonNames, setFilteredPokemonNames] = useState<string[]>([])
    const navigate = useNavigate()
    const pokemonContext = useContext(PokemonContext) as PokemonContextType

    const { pokemonList } = pokemonContext

    const handleKeyEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        navigateToPokemonDetail(searchValue);
      }
    }, [searchValue, navigate])

    const navigateToPokemonDetail = (pokemonName: string) => {
      if (pokemonName.trim() !== '') {
        const formattedPokemonName = pokemonName.trim().toLowerCase()
        navigate(`/PokemonDetail/${formattedPokemonName}`)
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchValue(value)
      filterPokemonNames(value)
    };

    const filterPokemonNames = (value: string) => {
      const filteredNames = pokemonList
        .filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))
        .map(pokemon => pokemon.name)
      setFilteredPokemonNames(filteredNames)
    };
    
    useEffect(() => {
      filterPokemonNames(searchValue)
    }, [searchValue, pokemonList])

    return (
      <div className="z-50">
        {editing ? (
          <div>
            <input
              onKeyDown={handleKeyEnter}
              onBlur={() => setEditing(false)}
              className="px-4 h-5 text-sm rounded-xl w-[90%]"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange}
            />
            <ul className="absolute right-0 p-5 bg-blueDonker text-white capitalize h-[200px] w-[80%]
            text-center overflow-x-scroll rounded-xl shadow-xl shadow-blueDonker mr-3 ">
              {filteredPokemonNames.map((name, index) => (
                <li className="hover:bg-blue border-b-[1px] border-lightBlue last:border-b-[0] py-2 font-bold cursor-pointer" key={index} onClick={() => navigateToPokemonDetail(name)}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <img
            onClick={() => setEditing(true)}
            src={searchIcon}
            alt="pokemon logo"
            className="w-6 h-5 object-contain"
          />
        )}
      </div>
    )
}

export default SearchField

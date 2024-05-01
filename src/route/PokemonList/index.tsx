import Navbar from "../../component/Header/Navbar"
import usePokemonList from "../../hooks/usePokemonList"
import PokemonBox from "./component/PokemonBox"

const PokemonList: React.FC = () => {
    const { pokemonList, loading, error } = usePokemonList();

    if (error) return <div>Something is wrong :(</div>

    return (
        <>
            <Navbar />
            <div className="">
            {loading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="bg-darkBlue grid grid-cols-2 gap-4 p-4">
          {pokemonList.map((each, index) => 
          <PokemonBox key={index} name={each.name} />)}
        </div>
      )}
            </div>
            
        </>
    )
}

export default PokemonList
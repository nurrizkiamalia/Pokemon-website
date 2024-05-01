import { useParams } from "react-router-dom";
import Navbar from "../../component/Header/Navbar"
import usePokemonDetails from "../../hooks/usePokemonDetail";

const PokemonDetail: React.FC = () => {
    const { name = "" } = useParams();

    const { pokemonDetails, error } = usePokemonDetails(name);
  
    if (error) return <div className="text-white font-dmSans font-bold">Something is wrong</div>;
    if (!name || !pokemonDetails) return <div className="text-white font-dmSans font-bold">Not Found</div>;

    return (
        <div className="h-screen">
            <Navbar />
                <div className="p-6 h-[100%]">
                    <span className="text-lightBlue hover:scale-105">#1000</span>
                    <img src={pokemonDetails.artworkFront} alt="Pokemon" className="m-auto hover:scale-105 transition-transform " />
                    <div className="flex justify-between">
                        <h2 className="text-white font-bold capitalize text-xlText hover:drop-shadow-2xl hover:scale-105 transition-all">{pokemonDetails.name}</h2>
                        <img src={pokemonDetails.spriteFront} alt="pokemon sprite" className="mt-[-20px] hover:scale-110 transition-all" />
                    </div>
                    <div className="bg-blueDonker p-6 rounded-lg hover:scale-[1.03] transition-all hover:shadow-2xl hover:shadow-lightBlue">
                        <div className="flex flex-col gap-3">
                            <p className="text-lightBlue">Health</p>
                            <progress value={`${pokemonDetails.health}`} max={100} className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-green [&::-webkit-progress-value]:bg-green [&::-moz-progress-bar]:bg-green bg-darkBlue text-green h-2 rounded"></progress>
                            <span className="text-white flex items-center gap-2 text-lText">{pokemonDetails.health} <small className="text-smText">from 100</small></span>
                        </div>
                        <hr className=" border-blueLight my-3" />
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-lightBlue">Attack</p>
                                <span className="text-white flex items-center gap-2 text-lText">{pokemonDetails.attack}</span>
                            </div>
                            <div>
                                <p className="text-lightBlue">Defense</p>
                                <span className="text-white flex items-center gap-2 text-lText">{pokemonDetails.defense}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PokemonDetail
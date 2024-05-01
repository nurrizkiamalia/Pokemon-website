import { useCallback } from "react";
import usePokemonDetails from "../../../hooks/usePokemonDetail";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string
}

const PokemonBox: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails, loading, error } = usePokemonDetails(name);
  const navigate = useNavigate();

  const handleClickCard = useCallback(() => {
    navigate(`/PokemonDetail/${name}`);
  }, [name, navigate])

  if (loading || !pokemonDetails) return <div>Loading...</div>
  if (error) return <div>Something is wrong</div>
  
  return (
    <div onClick={handleClickCard} className="bg-lightBlue rounded-xl flex flex-col items-center justify-center p-5  cursor-alias shadow-md hover:scale-105 ">
        <img src={`${pokemonDetails.artworkFront}`} alt="Pokemon" className="hover:scale-105 bg-transparent hover:bg-blueDonker hover:shadow-xl hover:shadow-darkBlue" />
        <h3 className="line-clamp-2 capitalize text-center font-semibold">{pokemonDetails.name}</h3>
    </div>
  )
}

export default PokemonBox
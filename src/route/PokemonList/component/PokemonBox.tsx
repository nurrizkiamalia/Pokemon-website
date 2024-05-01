import { useCallback } from "react"
import usePokemonDetails from "../../../hooks/usePokemonDetail"
import { useNavigate } from "react-router-dom"

interface CardProps {
  name: string
}

const PokemonBox: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails, error } = usePokemonDetails(name)
  const navigate = useNavigate()

  const handleClickCard = useCallback(() => {
    navigate(`/PokemonDetail/${name}`)
  }, [name, navigate])

  if (error) return <div>Something is wrong</div>
  
  return (
    <div onClick={handleClickCard} className="bg-lightBlue rounded-xl flex flex-col items-center justify-center p-5  cursor-alias shadow-lg shadow-blueDonker hover:scale-105 transition-all ">
        <img src={`${pokemonDetails.artworkFront}`} alt="Pokemon" className="hover:scale-105 bg-transparent hover:from-blueDonker hover:to-lightBlue hover:shadow-xl hover:shadow-darkBlue hover:rounded-xl transition-all" />
        <h3 className="line-clamp-2 capitalize text-center font-semibold">{pokemonDetails.name}</h3>
    </div>
  )
}

export default PokemonBox
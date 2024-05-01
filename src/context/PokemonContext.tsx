import { useEffect, useState } from "react";
import { createContext } from 'react';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonContextType {
  pokemonList: Pokemon[];
  loading: boolean;
  error: unknown;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;

export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const MAX_FETCH_DATA = 10000;
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${searchQuery ? MAX_FETCH_DATA : 20}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon.');
        }
        const data = await response.json() as { results: Pokemon[]};

        let filteredResults = data.results;
        if (searchQuery) {
          const regex = new RegExp(searchQuery, 'i'); // Case-insensitive regex
          filteredResults = data.results.filter(pokemon => regex.test(pokemon.name));
        }
        const cappedResults = filteredResults.slice(0, 20); // Cap the results to max 20 items
        setPokemonList(cappedResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [searchQuery]);

  const value: PokemonContextType = {
    pokemonList,
    loading,
    error,
    setSearchQuery,
    searchQuery,
  };

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};
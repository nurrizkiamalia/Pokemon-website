import { Route, Routes } from 'react-router-dom'
import PokemonDetail from './route/PokemonDetail'
import PokemonList from './route/PokemonList'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below

  return (
    <div className='font-dmSans max-w-screen-sm m-auto p-0'>
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/PokemonDetail/:name" element={<PokemonDetail />} />
    </Routes>
    </div>
  )
}

export default App
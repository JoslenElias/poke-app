import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { getPokemonData, getPokemons } from "./components/api";
import Results from "./components/Results";
import Pokemon from "./components/Pokemon";
// import { getPokemons } from "./components/api";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      console.log(results);
      setLoading(false);
    } catch(err){}
};

  useEffect(() => {
    fetchPokemons();
  }, []);

return(
  <div>
      {/* <Navbar />  */}
  <div className="App">
   <Navbar />  
  <Searchbar />
        {/* <Pokemon pokemons={pokemons} />  */}
       {/* <Results pokemons={pokemons} />   */}
  {/* <Searchbar />  */}
  {/* { loading ? */}
                 {pokemons.map((pokemon , idx) => {
                  return<Pokemon pokemon={pokemon} key={pokemon.name} />;
              })}
  {/* : */}
   <div>Loading Pokemons...</div> 
  {/* } */}
  </div>
  </div>
);
};
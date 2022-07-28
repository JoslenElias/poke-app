import React from "react";
import { searchPokemon } from "./api"
const {useState} = React;

const Searchbar = () => {
let Search = "";
const[search, setSearch] = useState('');
const[pokemon, setPokemon]= useState();
const[api, setApi] = useState();

const onChange = (e) => {
setSearch(e.target.value);
}

const onClick = async (e) =>{
    const data = await searchPokemon(search);
    setPokemon(data);
}

    return(
     <div className="searchbar-container"> 
     <div className="searchbar">
     </div>
     <div>
    <input placeholder="Search Pokemon..." onChange={onChange} />
    </div>
        <div className="searchbar-btn">
            <button onClick={onClick}>Search</button>
        </div>
    </div>
    );
};

export default Searchbar;

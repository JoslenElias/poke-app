import React from "react";
import Pokemon from "./Pokemon";

const Results = (props) => {
    const {pokemons} = props;
    return(
        <div>
             {/* <Pokemon />  */}
            <div className="header">
                <h1> Results </h1>
                <div> pagination</div>
            </div>
            <div className="result-grid">
                {pokemons.map((pokemon , idx) => {
                    return<Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
            </div>
        </div>
    );
};

export default Results;
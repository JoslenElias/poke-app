import React from "react";

const Pokemon = (props) => {
const { pokemon } = props;
console.log(pokemon);
return(
    <div className="pokemon-card">
        <div className="pokemon-img-container">
            <img src={pokemon.sprites.front_defult} alt="pokemon.name" className="pokemon-img" />
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom"> 
              <div className="pokemon-type">
                {pokemon.types.map((type, idx) => {
                    return (<div key={idx} className="pokemon-type-text">{type.type.name}</div>
                    );
                })}
                </div>
                <div className="pokemon-favorite">❤️</div>
            </div>
        </div>
    </div>
);
};

export default Pokemon;
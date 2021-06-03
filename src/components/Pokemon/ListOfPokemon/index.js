import React from "react";
import Pokemon from "../Pokemon/index";

export default function ListOfPokemon({ pokemon }) {
  return (
    <div className="m-pokemon__container">
      <div className="m-pokemon__title">Pokemon</div>
      <div className="m-pokemon">
        {pokemon.map((poke) => (
          <Pokemon datos={poke} />
        ))}
      </div>
    </div>
  );
}

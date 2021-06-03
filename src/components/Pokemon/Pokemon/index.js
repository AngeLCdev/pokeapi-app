import React from "react";

export default function Pokemon({ datos }) {

  const {pokemon} = datos
  const {name} = pokemon
  return (
    <div className="m-poke__title">{name}</div>
  );
}

import React from "react";
import { Link } from "wouter";
export default function Pokemon({ datos }) {

  const {pokemon} = datos
  const {name} = pokemon
  return (
    <div className="m-poke__title">
      <Link to={`/pokemon/detalle/${name}`}>{name} </Link>
      </div>
  );
}

import React from "react";
import { Link } from "wouter";

import Header from "../Header/index";
import Sprites from "../Sprites";
import Info from "../Info";

export default function DetallePokemon({ datos }) {
  const {
    base_experience,
    weight,
    height,
    held_items,
    moves,
    stats,
    types,
    sprites,
    game_indices,
    name,
  } = datos;

  return (
    <div className="m-detalleTipo">
      <Header
        game_indices={game_indices}
        sprites={sprites}
        name={name}
        types={types}
      />
      <Sprites sprites={sprites} />
      <Info movimientos={moves} base_experience={base_experience} weight={weight} height={height} held_items={held_items} stats={stats}/>
    </div>
  );
}

import React from "react";

import { useGameIndice } from "hooks/useGameIndice";
import ListaDeTipos from 'components/Type/ListaDeTipos/ListaDeTipos'

export default function HeaderPokemon({ name, game_indices, types }) {
  console.log(game_indices);
  const lastGame = useGameIndice({ game_indices });

  return (
    <>
      <div className="m-pokemon__header">
        <div className="m-pokemon__header--title">
          <div className="m-pokemon__name">{name}</div>
          <div className="m-pokemon__index">#{lastGame.result}</div>
        </div>
        <div className="m-pokemon__types">
            {
                <ListaDeTipos tipos={types}/>
            }
        </div>
      </div>
    </>
  );
}

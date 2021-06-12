import React from "react";

import ListOfMoves from "components/Moves/ListOfMoves";
import Stats from "../Stats";

export default function Info({
  movimientos,
  base_experience,
  weight,
  height,
  held_items,
  stats,
}) {
  return (
    <>
      <div className="m-pokemon__info">
        <div className="m-pokemon__movimientos">
          {<ListOfMoves movimientos={movimientos} />}
        </div>
        <div className="m-pokemon__stats">
          <Stats
            base_experience={base_experience}
            weight={weight}
            height={height}
            held_items={held_items}
            stats={stats}
          />
        </div>
      </div>
    </>
  );
}

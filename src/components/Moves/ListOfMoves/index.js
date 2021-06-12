import React from "react";

import Move from "../Move/index";

export default function ListOfMoves({ movimientos }) {
  return (
    <div className="m-moves__container">
      <div className="m-moves__title">Movimientos</div>
      <div className="m-moves">
        {movimientos.map((movimiento) => (
          <>
          {
            movimiento.move 
            ? <Move key={`tipo${movimiento.move.name}`} name={movimiento.move.name} />
            : <Move key={`tipo${movimiento.name}`} name={movimiento.name} />
          }
          </>
        ))}
      </div>
    </div>
  );
}

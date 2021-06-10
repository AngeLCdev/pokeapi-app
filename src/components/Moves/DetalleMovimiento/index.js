import React from "react";
import { useName } from "hooks/useName";

export default function DetalleMovimiento({ datos }) {
  const { names } = datos;

  const nameEs = useName({ names });
  const nameJp = useName({ names, languague: "ja" });

  
  return (
    <div className="m-detalleTipo">
      {Object.keys(nameEs).length > 0 ? <div className='m-move__name'>Movimiento: {nameEs.result.name}</div> : null}
      {Object.keys(nameJp).length > 0 ? <div className='m-move__name'>Movimiento (japonés): {nameJp.result.name}</div> : null}
    </div>
  );
}

import React from "react";
import { Link } from "wouter";
import { useName } from "hooks/useName";

export default function DetalleMovimiento({ datos }) {
  const { names, accuracy, power, pp, type, priority} = datos;
  console.log(datos);
  const nameEs = useName({ names });
  const nameJp = useName({ names, languague: "ja" });

  
  return (
    <div className="m-detalleTipo">
      {Object.keys(nameEs).length > 0 ? <div className='m-move__name'>Movimiento: {nameEs.result.name}</div> : null}
      {Object.keys(nameJp).length > 0 ? <div className='m-move__name'>Movimiento (japonés): {nameJp.result.name}</div> : null}
      {accuracy ? <div className='m-move__name'>Porcentaje de éxito en el movimiento {accuracy} %</div> : null}
      <div className='m-move__name'>Daño: {power ? power : 0} </div>
      <div className='m-move__name'>Prioridad: {priority ? priority : 0} </div>
      {pp ? <div className='m-move__name'>PP: {pp} </div> : null}
      {type ? <div className='m-move__name'>Tipo: <Link to={`/tipo/detalle/${type.name}`}>{type.name} </Link> </div> : null}
      
      
    </div>
  );
}

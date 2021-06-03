import React from "react";

export default function InfoTipo({ datos }) {
  console.log(datos);
  const { generation, move_damage_class } = datos;

  return (
    <div className="m-detalleTipo__info">
      {generation ? (
        <div className="">
          Este movimiento fue introducido en la {generation.name}
        </div>
      ) : null}
      {move_damage_class ? (
        <div className="">Su categoria es {move_damage_class.name}</div>
      ) : null}
    </div>
  );
}

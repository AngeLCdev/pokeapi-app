import React from "react";

import DamageTypeData from "components/Type/DamageTypeData/index";
import InfoTipo from "../InfoTipo";
import ListOfMoves from "components/Moves/ListOfMoves";
import ListOfPokemon from "components/Pokemon/ListOfPokemon";

export default function DetalleTipo({ datos, type }) {
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
    generation,
    move_damage_class,
    moves,
    pokemon,
  } = datos;


  const datosInfo = {
    generation,
    move_damage_class,
  };

  return (
    <div className="m-detalleTipo">
      <div className="m-detalleTipo__title">{type}</div>

      {<InfoTipo datos={datosInfo} />}

      <div className="m-detalleTipo__damageContainer">
        {double_damage_from ? (
          <DamageTypeData datos={double_damage_from} title={"Es muy débil"} />
        ) : null}
        {double_damage_to ? (
          <DamageTypeData datos={double_damage_to} title={"Es muy eficaz"} />
        ) : null}
        {half_damage_from ? (
          <DamageTypeData datos={half_damage_from} title={"Recibe poco daño"} />
        ) : null}
        {half_damage_to ? (
          <DamageTypeData datos={half_damage_to} title={"Es poco eficaz"} />
        ) : null}
        {no_damage_from ? (
          <DamageTypeData datos={no_damage_from} title={"Es inmune"} />
        ) : null}
        {no_damage_to ? (
          <DamageTypeData datos={no_damage_to} title={"No le hace daño"} />
        ) : null}
      </div>

      {moves ? (
        <ListOfMoves movimientos={moves} />
      ) : (
        "No se han encontrado movimientos"
      )}
      {pokemon ? (
        <ListOfPokemon pokemon={pokemon} />
      ) : (
        "No se han encontrado pokemon"
      )}
    </div>
  );
}

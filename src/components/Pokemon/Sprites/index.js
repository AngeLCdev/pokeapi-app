import React from "react";

import SpriteDetalle from "../SpriteDetail";
export default function HeaderPokemon({ sprites }) {
  const {
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
    front_default,
    front_female,
    front_shiny,
    front_shiny_female,
  } = sprites;

  return (
    <div className='m-sprites__container'>
      {back_default && front_default ? (
        <SpriteDetalle
          back={back_default}
          front={front_default}
          name="Skin por defecto"
        />
      ) : null}
      {back_female && front_female ? (
        <SpriteDetalle
          back={back_female}
          front={front_female}
          name="Skin por defecto femenina"
        />
      ) : null}
      {back_shiny && front_shiny ? (
        <SpriteDetalle
          back={back_shiny}
          front={front_shiny}
          name="Skin shiny"
        />
      ) : null}
      {back_shiny_female && front_shiny_female ? (
        <SpriteDetalle
          back={back_shiny_female}
          front={front_shiny_female}
          name="Skin shiny femenina"
        />
      ) : null}
    </div>
  );
}

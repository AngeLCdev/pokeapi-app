import React from "react";

import Tipo from "components/Type/Tipo/index";
export default function ListaDeTipos({ tipos }) {
  return (
    <div className="m-tipos__container">
      <div className='m-tipos'>
        {tipos.map((tipo) => (
          <>
          {
            tipo.type 
            ? <Tipo key={`tipo${tipo.type.name}`} name={tipo.type.name} />
            : <Tipo key={`tipo${tipo.name}`} name={tipo.name} />
          }
          
          </>
        ))}

      </div>
    </div>
  );
}

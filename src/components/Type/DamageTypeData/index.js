import React from "react";

import DetalleDamageTypeData from "components/Type/DetalleDamageTypeData/index";

export default function DetalleTipo({ datos, title }) {
  return (
    <>
      {datos.length > 0 ? (
        <div>
          <div className="m-detalleTipo__title--detail">{title}</div>
          {datos.map((datos, index) => (
            <DetalleDamageTypeData datos={datos} key={index}/>
          ))}
        </div>
      ) : null}
    </>
  );
}

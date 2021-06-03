import React from "react";

export default function DetalleDamageTypeData({ datos }) {
  return (
    <>
        <div className='m-detalleTipo__tipo'>{datos.name}</div>
    </>
  );
}

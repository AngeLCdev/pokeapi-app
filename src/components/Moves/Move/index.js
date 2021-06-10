import React from "react";
import { Link } from "wouter";
export default function Move({ name }) {
  return (
    <div className="m-move__title">
      <Link to={`/movimiento/detalle/${name}`}>{name} </Link>
    </div>
  );
}

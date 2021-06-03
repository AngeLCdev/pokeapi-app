import React from "react";
import { Link } from "wouter";

export default function Tipo({ name }) {
  return (
    <div className="m-tipo">
      <Link to={`tipo/detalle/${name}`} className="m-tipo__link">{name}</Link>
    </div>
  );
}

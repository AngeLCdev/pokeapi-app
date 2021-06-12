import React from "react";

export default function SpriteDetalle({ back, front, name }) {
  return (
    <div className="m-sprite__container">
      <div className="m-sprite__images">
        <img src={back} alt="" />
        <img src={front} alt="" />
      </div>
      <div className="m-sprite__name">{name}</div>
    </div>
  );
}

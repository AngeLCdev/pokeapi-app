import React from "react";

export default function Stats({
  base_experience,
  weight,
  height,
  held_items,
  stats,
}) {
  console.log(held_items);
  return (
    <>
      <div className="m-moves__title">Stats</div>
      <div className="m-stats__container">
        {stats
          ? stats.map((stat) => <div className="m-stats__stat">
              {stat.stat.name}: {stat.base_stat}
          </div>)
          : null}
      </div>
      <div className="m-stats__info">
          <div className="m-stats__info--item"><span className="m-stats__info--title">Altura:</span> {height}</div>
          <div className="m-stats__info--item"><span className="m-stats__info--title">Peso</span>: {weight}</div>
          <div className="m-stats__info--item"><span className="m-stats__info--title">Si te lo encuentras salvaje, ¿lo puedes encontrar con objetos encima?:</span> {held_items.length > 0 ? 'Sí' : 'No'}</div>
          <div className="m-stats__info--item"><span className="m-stats__info--title">Experiencia base que ganas al derrotarlo</span> {base_experience}</div>
      </div>
    </>
  );
}

import { API_URL } from "./settings";

const fromApiResponseToData = (apiResponse) => {
  const {
    damage_relations = [],
    generation,
    move_damage_class,
    moves,
    pokemon,
  } = apiResponse;

  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  } = damage_relations;

  return {
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
  };
};

export default function getDetalleTipo({ keyword } = { keyword: "normal" }) {
  const apiURL = `${API_URL}/type/${keyword}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}

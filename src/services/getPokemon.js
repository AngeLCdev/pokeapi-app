import { API_URL } from "./settings";

const fromApiResponseToData = (apiResponse) => {
  const {base_experience, weight, height, held_items, moves, stats, types, sprites, game_indices, name} = apiResponse
  console.log(apiResponse)
  return {base_experience, weight, height, held_items, moves, stats, types, sprites, game_indices, name};
};

export default function getDetalleTipo({ keyword } ) {
  const apiURL = `${API_URL}/pokemon/${keyword}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}




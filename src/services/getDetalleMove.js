import { API_URL } from "./settings";

const fromApiResponseToData = (apiResponse) => {
  const { pp, power, names, accuracy, type, priority } = apiResponse;

  return { pp, power, names, accuracy, type, priority };
};

export default function getDetalleTipo({ keyword } = { keyword: "normal" }) {
  const apiURL = `${API_URL}/move/${keyword}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}

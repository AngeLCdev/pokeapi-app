import { API_URL } from "./settings";

const fromApiResponseToData = (apiResponse) => {
  const { results = [] } = apiResponse;
  if (Array.isArray(results)) {
    const tipos = results.map(tipo => {
      const {name, url} = tipo
      return { name, url }
    })
    return tipos
  }
  return [];
};

export default function getTypes() {
  const apiURL = `${API_URL}/type`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData);
}

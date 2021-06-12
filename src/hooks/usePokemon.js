import { useEffect, useState } from "react";
import getPokemon from 'services/getPokemon'

export function usePokemon({keyword}) {
  const [loading, setLoading] = useState(true);
  const [detalleTipo, setDetalleTipo] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      getPokemon({keyword})
      .then(tiposApi => {
        setDetalleTipo(tiposApi);
        setLoading(false);
      });
    },
    [setDetalleTipo, keyword]
  );

  return { loading, detalleTipo };
}

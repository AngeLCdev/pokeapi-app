import { useEffect, useState } from "react";
import getDetalleMove from 'services/getDetalleMove';

export function useDetalleMovimiento({keyword}) {
  const [loading, setLoading] = useState(true);
  const [detalleTipo, setDetalleTipo] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      getDetalleMove({keyword})
      .then(tiposApi => {
        setDetalleTipo(tiposApi);
        setLoading(false);
      });
    },
    [setDetalleTipo, keyword]
  );

  return { loading, detalleTipo };
}

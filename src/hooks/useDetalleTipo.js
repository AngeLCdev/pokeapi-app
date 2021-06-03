import { useEffect, useState } from "react";
import getDetalleTipo from "services/getDetalleTipo";

export function useDetalleTipo({keyword}) {
  const [loading, setLoading] = useState(false);
  const [detalleTipo, setDetalleTipo] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      getDetalleTipo({keyword})
      .then(tiposApi => {
        setDetalleTipo(tiposApi);
        setLoading(false);
      });
    },
    [setDetalleTipo, keyword]
  );

  return { loading, detalleTipo };
}

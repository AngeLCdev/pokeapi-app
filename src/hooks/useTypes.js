import { useEffect, useState } from "react";
import getTypes from "services/getTypes";

export function useTypes() {
  const [loading, setLoading] = useState(true);
  const [tipos, setTipos] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      getTypes()
      .then(tiposApi => {
        setTipos(tiposApi);
        setLoading(false);
      });
    },
    [setTipos]
  );

  return { loading, tipos };
}

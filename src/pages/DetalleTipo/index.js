import DetalleTipo from "components/Type/DetalleTipo/index";
import SkeletonLoader from "components/SkeletonLoader/index";
import { useDetalleTipo } from "hooks/useDetalleTipo";

export default function DetalleTipoPage({ params }) {
  const { id } = params;
  const { detalleTipo, loading } = useDetalleTipo({ keyword: id });
  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <DetalleTipo datos={detalleTipo} type={id} />
      )}
    </>
  );
}

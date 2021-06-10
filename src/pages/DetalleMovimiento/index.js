import DetalleMovimiento from "components/Moves/DetalleMovimiento/index";
import SkeletonLoader from "components/SkeletonLoader/index";
import { useDetalleMovimiento } from "hooks/useDetalleMovimiento";

export default function DetalleMovimientoPage({ params }) {
  const { id } = params;
  const { detalleTipo, loading } = useDetalleMovimiento({ keyword: id });
  
  
  return <>{loading ? <SkeletonLoader /> : <DetalleMovimiento datos={detalleTipo} />}</>;
}

import DetallePokemon from "components/Pokemon/DetallePokemon";
import SkeletonLoader from "components/SkeletonLoader/index";
import { usePokemon } from "hooks/usePokemon";

export default function DetallePokemonPage({ params }) {
  const { id } = params;
  const { detalleTipo, loading } = usePokemon({ keyword: id });
  
  
  return <>{loading ? <SkeletonLoader /> : <DetallePokemon datos={detalleTipo} />}</>;
}

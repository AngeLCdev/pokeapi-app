import ListaDeTipos from 'components/Type/ListaDeTipos/ListaDeTipos'
import {useTypes} from 'hooks/useTypes'


export default function Home() {

  const {tipos} = useTypes()

  return (
    <>
        <ListaDeTipos tipos={tipos}/>
      
    </>
  );
}



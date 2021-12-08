import Gallery from '../Components/Gallery';
import InformationLasCatarinas from '../Components/LasCatarinas/InformationLasCatarinas';
import Button from '../Utils/Button';
const LasCatarinasData = () => {
  return <div>
    <Gallery /> 
    <InformationLasCatarinas />
    <Button text='Reservar'/>
  </div>
};

export default LasCatarinasData;
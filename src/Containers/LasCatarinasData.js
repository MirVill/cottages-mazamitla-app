import InformationLasCatarinas from '../Components/LasCatarinas/InformationLasCatarinas';
import Button from '../Utils/Button';
import LasCatarinasGallery from '../Components/LasCatarinas/LasCatarinasGallery';
const LasCatarinasData = () => {
  return <div className='cottage-page-container' >
    <h1 className='page-title' >Las Catarinas</h1>
    <LasCatarinasGallery /> 
    <InformationLasCatarinas />
    <Button text='Reservar'/>
  </div>
};

export default LasCatarinasData;
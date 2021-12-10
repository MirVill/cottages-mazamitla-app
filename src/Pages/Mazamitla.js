import MazamitlaActivities from "../Components/Mazamitla/MazamitlaActivities";
import MazamitlaDescription from "../Components/Mazamitla/MazamitlaDescription";
import Activities from '../Components/Mazamitla/ActivitiesPhotos';
import atractions from '../Components/Mazamitla/AtractionPhotos';

const Mazamitla = () => {
  return <div className='mazamitla-page' >
    <MazamitlaDescription />
    <MazamitlaActivities activitiesPhotos={Activities} title='Actividades' />
    <MazamitlaActivities activitiesPhotos={atractions} title='Atracciones' />
  </div>
};

export default Mazamitla;
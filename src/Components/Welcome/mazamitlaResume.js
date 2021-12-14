import img from '../../Assets/Images/Mazamitla-1.jpg';
import Button from '../../Utils/Button';
const MazamitlaResume = () => {
  return <div className="mazamitla-resume__container">
    <img src={img} alt='Mazamitla' className='mazamitla-resume__img'/>
    <div>
    {/* <h1>Visita Mazamitla</h1> */}
    <Button text='Sobre Mazamitla' />
    </div>
  </div>
};
export default MazamitlaResume;
import locationImage from '../Assets/Images/location.jpg';
const Location = () => {
  return (
    <div className="card-transparent">
      <div className="location-container">
        <h2>Ubicación</h2>
        <div>
          <h3>La Toscana, Mazamitla, Jalisco.</h3>
        </div>
        <a
          href="https://www.google.com/maps/place/La+Toscana,+Jal./@19.9222803,-103.0211428,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x842f08c29d6bb1fb:0xb0e0d639aa12c005!2sMazamitla,+Jal.!3b1!8m2!3d19.9165757!4d-103.0212924!3m4!1s0x842f08bf8895154b:0xfcc8b94ce85b1b0a!8m2!3d19.9222625!4d-103.0123883"
          target="_blank"
          rel="noreferrer"
        >
          <img src={locationImage} alt="Mapa" />
        </a>
      </div>
    </div>
  );
};

export default Location;
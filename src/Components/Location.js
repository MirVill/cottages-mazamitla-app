import locationImage from '../Assets/Images/location.jpg';
const Location = (props) => {
  return (
    <div className="card-transparent">
      <div className="location-container">
        <h2>Ubicación</h2>
        <div>
          <h3>{props.title}</h3>
        </div>
        <a
          href={props.url}
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
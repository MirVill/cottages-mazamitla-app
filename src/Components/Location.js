import locationImage from '../Assets/Images/location.jpg';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Location = (props) => {
  const pin = <FontAwesomeIcon icon={faMap} size="xs"/>;
  return (
    <div className="card-transparent">
      <div className="location-container">
        <h2>{pin} Ubicación </h2>
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
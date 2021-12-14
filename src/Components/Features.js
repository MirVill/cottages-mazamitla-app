import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBed,
  faCouch,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

const Features = (props) => {
  const angle = <FontAwesomeIcon icon={faAngleRight} size="sm"/>;
  const bed = <FontAwesomeIcon icon={faBed} size="lg" />;
  const couch = <FontAwesomeIcon icon={faCouch} size="lg" />;
  const shower = <FontAwesomeIcon icon={faShower} size="lg" />;

  const entretainmentList = props.entretainment.map((feature) => {
    return (
      <li key={feature} >
        {angle} {feature}
      </li>
    );
  });

  const bedsList = props.beds.map((bed) => <div key={bed} >{bed}</div>);
  return (
    <div className="card">
      <div className='features-container' >
      <div className="features-list-container">
        <h1>{props.description}<span><p>{props.price}</p></span></h1>
        <ul className="features-list">
          <li>
            {angle} {props.bedrooms}
          </li>
          <li>
            {angle} {props.toilets}
          </li>
          <li>
            {angle} {props.chimneys}
          </li>
          {entretainmentList}
        </ul>
      </div>
      <div className="features-icons-container">
        <ul className="features-icons-list">
          <li>
            {bed} {bedsList}
          </li>
          <li>
            {couch} <div>{props.couches}</div>
          </li>
          <li>
            {shower} <div>{props.showers}</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};
export default Features;

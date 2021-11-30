import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
const ScheduleAndRules = (props) => {
  const angle = <FontAwesomeIcon icon={faAngleRight} size="sm"/>;
  const rulesList = props.rules.map((rule) => {
    return <li key={rule} >{angle} {rule}</li>
  })
  return (
    <div className="card-transparent">
      <div className='schedule-container' >
        <h2>Horarios</h2>
        <p>Entrada: {props.schedule.checkIn} - Salida: {props.schedule.checkOut}</p>
      </div>
      <div className='rules-container' >
        <h2>Reglas</h2>
        <ul>
          {rulesList}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleAndRules;

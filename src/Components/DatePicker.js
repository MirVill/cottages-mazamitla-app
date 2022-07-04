import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { es } from 'date-fns/locale';

const DatePicker = (props) => {
  const reservedDates = [
    "2022 02 16",
    "2022 08 03"
  ];

  const handleSelect = (date) => {
    console.log(date);
  };
  const disabledDates = reservedDates.map((date) => {
    return new Date(date);
  });
  const close = (
    <FontAwesomeIcon
      icon={faTimes}
      size="lg"
      onClick={props.modalIsOpenHandler}
    />
  );
  const phone = (
    <FontAwesomeIcon icon={faPhoneAlt} size="sm" className="phone" />
  );

  return (
    <div className="component-container">
      <div className="datePicker-container">
        <div className="datePicker-container__title">
          <h1>Revisa las fechas disponibles</h1>
          <h2> Elige la fecha de tu viaje</h2>
          <h3>LLama al:</h3>
          <h1>{phone} 341-41-12-501</h1>
        </div>
        <Calendar
          date={new Date()}
          minDate={new Date()}
          maxDate={new Date('June 2023')}
          onChange={handleSelect}
          locale={es}
          disabledDates={disabledDates}
          color="#7BC67B"
          fixedHeight={true}
          className="calendar"
        />
      </div>
      <div className="datePicker-container__close">{close}</div>
      <button className="datePicker-container__btn" onClick={props.modalIsOpenHandler}>Close</button>
    </div>
  );
};

export default DatePicker;

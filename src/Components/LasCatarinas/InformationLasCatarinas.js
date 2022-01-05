import Features from "../CabinPage/Features";
import ScheduleAndRules from "../CabinPage/ScheduleAndRules";
import Location from "../Location";
import { featuresData, scheduleData, rulesData } from "./Data/LasCatarinasData";
const InformationLasCatarinas = () => {
  return (
    <div className="info-container">
      <Features
        name={featuresData.name}
        price={featuresData.price}
        description={featuresData.description}
        bedrooms={featuresData.bedrooms}
        toilets={featuresData.toilets}
        chimneys={featuresData.chimneys}
        entretainment={featuresData.entretainment}
        beds={featuresData.beds}
        couches={featuresData.chouches}
        showers={featuresData.showers}
      />
      <ScheduleAndRules schedule={scheduleData} rules={rulesData} />
      <Location
        title="La Toscana, Mazamitla, Jalisco."
        url="https://www.google.com/maps/place/La+Toscana,+Jal./@19.9222803,-103.0211428,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x842f08c29d6bb1fb:0xb0e0d639aa12c005!2sMazamitla,+Jal.!3b1!8m2!3d19.9165757!4d-103.0212924!3m4!1s0x842f08bf8895154b:0xfcc8b94ce85b1b0a!8m2!3d19.9222625!4d-103.0123883"
      />
    </div>
  );
};

export default InformationLasCatarinas;

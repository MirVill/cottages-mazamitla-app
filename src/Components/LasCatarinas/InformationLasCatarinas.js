import Features from "../Features";
import ScheduleAndRules from "../ScheduleAndRules"; 
import Location from "../Location";
const InformationLasCatarinas = () => {
  const features = {
    name: "las catarinas",
    description: "Cabaña para 18 personas",
    price: '$2,700MXN por noche',
    bedrooms: "3 Recamaras",
    toilets: "2 Baños y medio",
    chimneys: "3 Chimeneas",
    beds: ["5 Matrimoniales", "1 King Size"],
    chouches: "3 sofas cama",
    showers: "2 regaderas",
    entretainment: [
      "Balcones Miradores",
      "Mesa de billar",
      "Futbolito",
      "Hamaca",
      "Jardín",
      "Terraza",
      "TV con dish",
    ],
  };
  const schedule = {
    checkIn: "15:00",
    checkOut: "13:00",
  };
  const rules = [
    "Realizar fogatas y cualquier fuego solo en los lugares designados.",
    "Al retirarse de la cabaña, dejarla en las condiciones en las que se encontró.",
    "Antes de partir, recojer toda basura y depositarla en el contenedor del fraccionamiento.",
    "Para solucionar cualquier situacion respecto a las instalaciones contactar al administrador de la misma."
  ];
  return (
    <div className="info-container">
      <Features
        name={features.name}
        price={features.price}
        description={features.description}
        bedrooms={features.bedrooms}
        toilets={features.toilets}
        chimneys={features.chimneys}
        entretainment={features.entretainment}
        beds={features.beds}
        couches={features.chouches}
        showers={features.showers}
      />
      <ScheduleAndRules schedule={schedule} rules={rules} />
      <Location
        title="La Toscana, Mazamitla, Jalisco."
        url="https://www.google.com/maps/place/La+Toscana,+Jal./@19.9222803,-103.0211428,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x842f08c29d6bb1fb:0xb0e0d639aa12c005!2sMazamitla,+Jal.!3b1!8m2!3d19.9165757!4d-103.0212924!3m4!1s0x842f08bf8895154b:0xfcc8b94ce85b1b0a!8m2!3d19.9222625!4d-103.0123883"
      />
    </div>
  );
};

export default InformationLasCatarinas;

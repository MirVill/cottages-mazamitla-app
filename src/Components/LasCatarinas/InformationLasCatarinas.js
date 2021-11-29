import Features from "../Features";
import ScheduleAndRules from "../ScheduleAndRules"; 
import Location from "../Location";
const InformationLasCatarinas = () => {
  const features = {
    name: "las catarinas",
    description: "Cabaña para 18 personas",
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
      <Location />
    </div>
  );
};

export default InformationLasCatarinas;

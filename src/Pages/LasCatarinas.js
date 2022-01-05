import LasCatarinasContainer from "../Containers/LasCatarinasContainer";
import { useEffect } from "react";

const LasCatarinas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <LasCatarinasContainer />;
};
export default LasCatarinas;

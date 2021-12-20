import LasCatarinasData from "../Containers/LasCatarinasData";
import { useEffect } from "react";

const LasCatarinas = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <LasCatarinasData />;
};
export default LasCatarinas;

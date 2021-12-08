import images from "./LasCatarinasPhotos";
import Gallery from "../Gallery";
import { Fragment, useState } from "react";
import Carousel from "../Carousel";

const LasCatarinasGallery = () => {
  const [mainPhoto, setMainPhoto] = useState(images[0]);
  const newimages = images.map((image, index) => {
    return (
      <img
        className={mainPhoto === image ? "photo-selected" : "photo"}
        key={index}
        src={image}
        alt="Foto"
        onClick={() => setMainPhoto(image)}
      />
    );
  });
  return (
    <Fragment>
      <Gallery photos={newimages} mainPhoto={mainPhoto}/>
      <Carousel slidePhotos={images}/>
    </Fragment>
  );
};

export default LasCatarinasGallery;

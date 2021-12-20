import images from "./Data/LasCatarinasPhotos";
import Gallery from "../CabinPage/Gallery";
import { Fragment, useState } from "react";
import Carousel from "../CabinPage/Carousel";

const LasCatarinasGallery = () => {
  const [mainPhoto, setMainPhoto] = useState(images[0].src);
  const newimages = images.map((image, index) => {
    return (
      <img
        className={mainPhoto === image.src ? "photo-selected" : "photo"}
        key={index}
        src={image.src}
        alt={image.title}
        onClick={() => setMainPhoto(image.src)}
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

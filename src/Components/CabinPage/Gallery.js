const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <div className="main-photo-container">
        <img src={props.mainPhoto} alt="Cabaña" className="main-photo" />
      </div>
      <div className="photos-container">{props.photos}</div>
    </div>
  );
};
export default Gallery;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
const [currImg, setCurrImg] = useState(0);
const rightArrow = <FontAwesomeIcon icon={faAngleRight} className='arrow'/>;
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} className='arrow'/>;
const leftArrowHandler = () => {
  currImg > 0 && setCurrImg(currImg-1);
};
const rightArrowHandler = () => {
  currImg < props.slidePhotos.length - 1 && setCurrImg(currImg+1);
};
  return (
      <div className='carousel'>
        <div className='carousel-inner' >
          <div className='left' onClick={leftArrowHandler} >{leftArrow}</div>
          <img src={props.slidePhotos[currImg]} alt='Cabaña'/>
          <div className='right' onClick={rightArrowHandler} >{rightArrow}</div>
        </div>
      </div>
  );
};
export default Carousel;

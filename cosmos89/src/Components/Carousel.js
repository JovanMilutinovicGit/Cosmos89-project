import React, { useState } from "react";
import "../Styles/Carousel.css";
import dataImages from "../Assets/carousel-images/Images.js";

const Carousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const previousPhoto = () => {
    setCurrentPhoto(currentPhoto - 1);
  };

  return (
    <div className="carousel">
      <div className="left-arrow">
        <i
          className="fa fa-angle-left"
          aria-hidden="true"
          onClick={() => {
            if (currentPhoto != 0) {
              setCurrentPhoto(currentPhoto - 1);
            }
          }}
        ></i>
      </div>
      <div className="carousel-images">
        <img src={dataImages[currentPhoto].img} />
        <div className="desc-of-img">
          <p className="txt-1">{dataImages[currentPhoto].text}</p>
        </div>
      </div>
      <div className="right-arrow">
        <i
          className="fa fa-angle-right"
          aria-hidden="true"
          onClick={() => {
            if (currentPhoto < dataImages.length - 1) {
              setCurrentPhoto(currentPhoto + 1);
            }
          }}
        ></i>
      </div>
    </div>
  );
};

export default Carousel;

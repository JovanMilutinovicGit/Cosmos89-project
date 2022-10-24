import React, { useState } from "react";
import dataCarouselBanner from "../Assets/carousel-banner/CarouselBannerData.js";
import "../Styles/CarouselBanner.css";
import LearnMore from "./Buttons/LearnMore.js";
import { NavDots } from "./NavDots.js";

const CarouselBanner = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <div className="carousel-banner">
      <img className="baner-img" src={dataCarouselBanner[currentPhoto].image} />
      <div className="title-and-desc">
        <p className="title-banner">{dataCarouselBanner[currentPhoto].title}</p>
        <p className="desc-banner">{dataCarouselBanner[currentPhoto].desc}</p>
        <LearnMore />
      </div>
      <div className="dots">
        <div
          className="banner-left-arrow"
          onClick={() => {
            if (currentPhoto != 0) {
              setCurrentPhoto(currentPhoto - 1);
            }
          }}
        >
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="dots-cmp">
          <NavDots />
        </div>
        <div
          className="banner-right-arrow"
          onClick={() => {
            if (currentPhoto < dataCarouselBanner.length - 1) {
              setCurrentPhoto(currentPhoto + 1);
            }
          }}
        >
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;

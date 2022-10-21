import React from "react";
import banner from "../Assets/banner.png";
import "../Styles/HomePage.css";
import leftPic from "../Assets/brain symbol left.png";
import rightPic from "../Assets/brain symbol right.png";
import Carousel from "../Components/Carousel";
import CardsList from "../Components/CardsList";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section-home-page">
        <img src={banner} />
        <div className="brain-symbol">
          <div className="hero-section-text">
            <p>We Help You Grow & Succeed</p>
          </div>
          <img src={leftPic} id="left" />
          <img src={rightPic} id="right" />
          <div className="carousel-content">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="discover">
        <div className="discover-title">
          <p>Discover Lifelong Learning</p>
        </div>
        <CardsList />
      </div>
    </div>
  );
};

export default HomePage;

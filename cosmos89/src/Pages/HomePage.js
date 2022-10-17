import React from "react";
import banner from "../Assets/banner.png";
import "../Styles/HomePage.css";
import leftPic from "../Assets/brain symbol left.png";
import rightPic from "../Assets/brain symbol right.png";
const HomePage = () => {
  return (
    <div className="home-page">
      <img src={banner} />
      <div className="brain-symbol">
        <img src={leftPic} id="left" />
        <img src={rightPic} id="right" />
      </div>
    </div>
  );
};

export default HomePage;

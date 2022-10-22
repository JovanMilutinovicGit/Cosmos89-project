import React from "react";
import banner from "../Assets/banner.png";
import "../Styles/HomePage.css";
import leftPic from "../Assets/brain symbol left.png";
import rightPic from "../Assets/brain symbol right.png";
import Carousel from "../Components/Carousel";
import CardsList from "../Components/CardsList";
import { NavDots } from "../Components/NavDots";
import Browse from "../Components/Buttons/Browse";
import ListCardsOfCourses from "../Components/ListCardsOfCourses";

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
            <div className="dots-menu-1">
              <NavDots />
            </div>
          </div>
        </div>
      </div>
      <div className="discover">
        <div className="discover-title">
          <p>Discover Lifelong Learning</p>
        </div>
        <CardsList />
        <div className="dots-menu-2">
          <div className="lft-arrow">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="cnt-dots">
            <NavDots />
          </div>
          <div className="rght-arrow">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
        <div className="btn-browse">
          <Browse />
        </div>
      </div>
      <div className="popular-courses">
        <div className="courses-title">
          <p>Most Popular Courses</p>
        </div>
        <div className="list-courses">
          <ListCardsOfCourses />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

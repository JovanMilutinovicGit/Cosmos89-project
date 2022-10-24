import React from "react";
import "../Styles/HomePage.css";
import leftPic from "../Assets/brain symbol left.png";
import rightPic from "../Assets/brain symbol right.png";
import Carousel from "../Components/Carousel";
import CardsList from "../Components/CardsList";
import { NavDots } from "../Components/NavDots";
import Browse from "../Components/Buttons/Browse";
import ListCardsOfCourses from "../Components/ListCardsOfCourses";
import bannerHeroSection from "../Assets/banner-hero-section.png";
import CarouselBanner from "../Components/CarouselBanner";
import ListFeatures from "../Components/ListFeatures";
import aboveFooterPhoto from "../Assets/above-footer.png";
import wave1 from "../Assets/wave1.png";
import wave2 from "../Assets/wave2.png";
import JoinNow from "../Components/Buttons/JoinNow";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section-home-page">
        <img src={bannerHeroSection} />
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
      <div className="banner-carousel">
        <CarouselBanner />
      </div>
      <div className="features">
        <ListFeatures />
      </div>
      <div className="above-footer">
        <div className="waves">
          <img className="waves1" src={wave1} />
          <img className="waves2" src={wave2} />
        </div>
        <div className="above-footer-content">
          <p className="start-learning">Start Learning Today!</p>
          <p className="info">
            A great place for those who want a grow and succeed in their life.
          </p>
          <JoinNow color="blue" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

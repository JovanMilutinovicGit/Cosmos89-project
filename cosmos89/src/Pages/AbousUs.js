import React from "react";
import "../Styles/About.css";
import img from "../Assets/about-banner.png";
import rec1 from "../Assets/Rectangle 61.png";
import rec2 from "../Assets/Rectangle 59.png";
import ListCardsFounders from "../Components/ListCardsFounders";

const AbousUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-hero-image">
          <img className="rec1" src={rec1} />
          <img className="rec2" src={rec2} />
          <img className="image-about" src={img} />
        </div>
        <div className="client-happines">
          <p className="title">We Are Driven By Client’s Happiness</p>
          <p className="desc">
            We are creatives, artists, designers, social butterflies, writers,
            photographers and strategists with various talents who thrive on
            working together only with our client’s success in mind.
          </p>
          <p className="desc">
            We believe in collaboration and understand by working together as a
            unity, we gain the momentum to elevate our individual skills, as
            well as our client’s growth and expansion. When joining forces on a
            specific task with our clients, we are enthusiastic about getting
            the best results for our clients. Understanding that the reward for
            creating something truly original doesn’t come without it’s risks of
            trying something new. Each person of our team is truly valued and
            appreciated for their contributions.
          </p>
        </div>
        <div className="our-philosophy">
          <p className="title">Our Philosophy</p>
          <p className="desc">
            To create a positive environment for better approach towards digital
            marketing by being transparent and proactive with a major focus to
            exceed our clien’ts expectation. Cosmos89’s team is our greatest
            assets where each member is valued and a vital key player of our
            success.
          </p>
        </div>
        <div className="cards">
          <div className="card-1">
            <p className="title">Our Mission</p>
            <p className="desc">
              Your mission statement consists of the ideas you have about your
              site and your company. Every business owner has certain
              expectations of their potential customers and site visitors. You
              want them to read your posts, or to buy your products. Perhaps you
              want to inform or entertain them to eventually improve their lives
              with your awesome products.
            </p>
          </div>
          <div className="card-2">
            <p className="title">Our Vision</p>
            <p className="desc">
              Your mission statement consists of the ideas you have about your
              site and your company. Every business owner has certain
              expectations of their potential customers and site visitors. You
              want them to read your posts, or to buy your products. Perhaps you
              want to inform or entertain them to eventually improve their lives
              with your awesome products.
            </p>
          </div>
        </div>
        <div className="about-us-founders">
          <p className="title">Our Awesome Founders</p>
          <p className="desc">
            Founder is a label with some amount of prestige. It carries
            connotations of creativity and innovation, determination, native
            intelligence, and a sense of fearlessness. Founders create something
            from nothing. Many entrepreneurship and startup resources talk about
            founders.
          </p>
        </div>
        <div className="founder-section">
          <ListCardsFounders />
        </div>
      </div>
    </div>
  );
};

export default AbousUs;

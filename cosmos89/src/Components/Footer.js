import React from "react";
import "../Styles/Footer.css";
import cosmosLogo from "../Assets/cosmos-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-2">
        <div className="name-social-media">
          <div className="logo-cosmos">
            <img src={cosmosLogo} width="26px" />
            <p>Cosmos89</p>
          </div>
          <div className="social-media">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-menu-1">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-menu-2">
            <ul>
              <li>Courses</li>
              <li>News</li>
              <li>Knowledge</li>
            </ul>
          </div>
        </div>
        <div className="privacy">
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
          <p>© 2022 Cosmos89. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

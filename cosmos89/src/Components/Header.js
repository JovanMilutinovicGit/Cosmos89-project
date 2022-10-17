import React from "react";
import Navbar from "./Navbar.js";
import cosmosLogo from "../Assets/cosmos-logo.png";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-1">
        <div className="phone-number">
          <p>(207) 733-1978</p>
        </div>
        <div className="logo-name">
          <div>
            <img src={cosmosLogo} width="40px" />
          </div>
          <div>
            <p>Cosmos89</p>
          </div>
        </div>
        <div className="social-media">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
      <div className="header-2">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;

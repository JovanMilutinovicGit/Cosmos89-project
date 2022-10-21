import React from "react";
import "../Styles/DiscoverNavbar.css";

const DiscoverNavbar = () => {
  return (
    <div className="discover-navbar">
      <div className="left-arrow-discover">
        <i className="fa fa-angle-left"></i>
      </div>
      <ul>
        <li>Financial literacy</li>
        <li>Crypto Currency</li>
        <li>Metaverse</li>
        <li>Financial History</li>
        <li>Monetary Systems</li>
      </ul>
      <div className="right-arrow-discover">
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};

export default DiscoverNavbar;

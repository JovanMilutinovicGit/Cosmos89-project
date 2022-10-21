import React from "react";
import "../Styles/DiscoverCard.css";

const DiscoverCard = ({ image, desc }) => {
  return (
    <div className="discover-card">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="card-desc">{desc}</div>
    </div>
  );
};

export default DiscoverCard;

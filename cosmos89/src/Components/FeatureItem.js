import React from "react";
import lampIcon from "../Assets/features/lamp.png";
import JoinNow from "./Buttons/JoinNow.js";
import "../Styles/FeatureItem.css";

const FeatureItem = ({ id, title, desc, image, background }) => {
  return (
    <div className={id != 2 ? "feature-item" : "feature-reverse"}>
      <div className="feature-item-left">
        <img className="lamp-icon" src={lampIcon} />
        <p className="feature-title">{title}</p>
        <p className="feature-desc">{desc}</p>
        <JoinNow />
      </div>
      <div className="feature-item-right">
        <img className="image-feature" src={image} />
        <img className="back-img-feature" src={background} />
      </div>
    </div>
  );
};

export default FeatureItem;

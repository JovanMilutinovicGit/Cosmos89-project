import React from "react";
import "../Styles/CardFounders.css";

const CardFounders = ({ name, last_name, proff, img, fb, tw, drb }) => {
  return (
    <div className="card-founders">
      <div className="founder-image">
        <div className="around-photo">
          <img src={img} />
        </div>
      </div>
      <div className="founder-name-and-proffesion">
        <div className="name-last_name">
          {name} {last_name}
        </div>
        <div className="profession">{proff}</div>
      </div>
      <div className="founder-social-media">
        <img src={fb} width="21px" />
        <img src={tw} width="21px" />
        <img src={drb} width="21px" />
      </div>
    </div>
  );
};

export default CardFounders;

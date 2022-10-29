import React from "react";
import DataFounders from "../Assets/founders/DataFounders.js";
import CardFounders from "./CardFounders.js";
import "../Styles/ListCardFounders.css";

const ListCardsFounders = () => {
  const FoundersList = DataFounders.map(
    ({
      id,
      name,
      last_name,
      profession,
      image,
      social_media: { fb_img, twitter_img, drbl_img },
    }) => {
      return (
        <div className="card-f" key={id}>
          <CardFounders
            name={name}
            last_name={last_name}
            proff={profession}
            img={image}
            fb={fb_img}
            tw={twitter_img}
            drb={drbl_img}
          />
        </div>
      );
    }
  );
  return <div className="list-founders">{FoundersList}</div>;
};

export default ListCardsFounders;

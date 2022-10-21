import React from "react";
import DiscoverCard from "./DiscoverCard";
import DiscoverNavbar from "./DiscoverNavbar.js";
import "../Styles/CardsList.css";
import DiscoverImages from "../Assets/DiscoverImages/DiscoverImages.js";

const CardsList = () => {
  const listofdisccards = DiscoverImages.map((element) => {
    return (
      <div>
        <DiscoverCard image={element.img} desc={element.desc} />
      </div>
    );
  });

  return (
    <div>
      <div className="discover-nvb">
        <DiscoverNavbar />
      </div>
      <div className="listOfDiscCards">{listofdisccards}</div>
    </div>
  );
};

export default CardsList;

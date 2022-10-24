import React from "react";
import featuresData from "../Assets/features/FeaturesData.js";
import FeatureItem from "./FeatureItem.js";
import "../Styles/ListFeatures.css";

const ListFeatures = () => {
  const list = featuresData.map(({ id, title, desc, image, background }) => {
    return (
      <div key={id}>
        <FeatureItem
          id={id}
          title={title}
          desc={desc}
          image={image}
          background={background}
        />
      </div>
    );
  });
  return <div className="list-features">{list}</div>;
};

export default ListFeatures;

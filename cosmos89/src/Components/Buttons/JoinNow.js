import React from "react";
import "../../Styles/JoinNow.css";

const JoinNow = ({ color }) => {
  return (
    <div className={color != "blue" ? "join-now" : "join-now-blue"}>
      <button>Join Now</button>
    </div>
  );
};

export default JoinNow;

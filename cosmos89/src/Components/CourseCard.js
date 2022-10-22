import React from "react";
import "../Styles/CourseCard.css";

const CourseCard = ({ image, desc }) => {
  return (
    <div className="course-card">
      <div className="img-course">
        <img src={image} />
      </div>
      <div className="name-course">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CourseCard;

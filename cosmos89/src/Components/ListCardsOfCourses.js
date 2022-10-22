import React from "react";
import dataimg from "../Assets/coursescards/CardsCoursesData.js";
import CourseCard from "./CourseCard.js";
import "../Styles/ListCardsOfCourses.css";

const ListCardsOfCourses = () => {
  const list = dataimg.map(({ id, img, txt }) => {
    return (
      <div key={id}>
        <CourseCard image={img} desc={txt} />
      </div>
    );
  });

  return <div className="list-courses-cards">{list}</div>;
};

export default ListCardsOfCourses;

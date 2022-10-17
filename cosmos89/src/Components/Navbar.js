import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/aboutus" className="link">
        About Us
      </Link>
      <Link to="/courses" className="link">
        Courses
      </Link>
      <Link to="/news" className="link">
        News
      </Link>
      <Link to="/knowledge" className="link">
        Knowledge
      </Link>
      <Link to="/contactus" className="link">
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;

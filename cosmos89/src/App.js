import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import HomePage from "./Pages/HomePage.js";
import AboutUs from "./Pages/AbousUs.js";
import Courses from "./Pages/Courses.js";
import News from "./Pages/News.js";
import ContactUs from "./Pages/ContactUs.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

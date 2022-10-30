import React from "react";
import "../Styles/ContactUs.css";
import brainSymbolOne from "../Assets/about-us-brain-symbol-1.png";
import brainSymbolTwo from "../Assets/about-us-brain-symbol-2.png";
import Submit from "../Components/Buttons/Submit";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-1">
        <img src={brainSymbolOne} />
      </div>
      <div className="contact-us-2">
        <img src={brainSymbolTwo} />
      </div>
      <div className="form-and-contact">
        <div className="contact">
          <div className="contact-title">
            <p className="title">Get In Touch</p>
            <p className="desc">
              You can contact us through email, phone or by visiting us. We will
              get back to you as soon as possible but we usually take 48 hours
              to entertain any query.
            </p>
          </div>
          <div className="contact-data">
            <label>
              <i className="fa fa-phone"></i>+1 555 505 5050
            </label>
            <label>
              <i className="fa fa-envelope"></i>hello@cosmos89.com
            </label>
            <label>
              <i className="fa fa-map-marker"></i>Stamford, CT06902
            </label>
          </div>
        </div>
        <div className="form">
          <div className="form-title">
            <p>Email Us</p>
          </div>
          <div className="inputs-0">
            <label>Your name</label>
            <input placeholder="Full Name" />
          </div>
          <div className="inputs-1">
            <div className="inputs-1-left">
              <label>Your Email Address</label>
              <input placeholder="Your Email Address" />
            </div>
            <div className="inputs-1-right">
              <label>Your Phone Number</label>
              <input placeholder="Your Phone Number" />
            </div>
          </div>
          <div className="inputs-2">
            <div className="inputs-2-left">
              <label>Your Company Name</label>
              <input placeholder="Your Company Name" />
            </div>
            <div className="inputs-2-right">
              <label>Reason For Contacting?</label>
              <input placeholder="Reason For Contacting?" />
            </div>
          </div>
          <div className="inputs-3">
            <label>Tell us how can we help?</label>
            <input placeholder="Tell us how can we help?" />
          </div>
          <div className="sbm-button">
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

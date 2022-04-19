import React from "react";
import "./Contact.css";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "1rem" }}>
        Contact
      </h1>
      <div className="app__wrapper-content">
        <p className="info">mail: info@netcoffee.com</p>
        <p className="info">phone: +51233483523</p>
      </div>
      <p
        className="p__cormorant"
        style={{ color: "#DCCA87", margin: "2rem 0" }}
      >
        Find Us
      </p>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Every Day: 10:00 am - 00:00 pm</p>
      </div>
    </div>

    <div className="app__wrapper_img_contact">
      <div className="menudiv" />
      <img src={images.contact} alt="finus_img" />
      <div className="menudiv" />
    </div>
  </div>
);

export default FindUs;

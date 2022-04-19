import React from "react";

import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app_header-h1">Net Coffee. The way it was meant to be.</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </div>

    <div className="app__wrapper_img">
      <div className="div" />
      <img src={images.header} alt="header img" />
      <div className="div" />
    </div>
  </div>
);

export default Header;

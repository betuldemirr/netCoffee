import React from "react";
import "./App.css";

import { Navbar, Header, AboutUs, Menu, Contact } from "./container";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Menu />
    <AboutUs />
    <Contact />
  </div>
);

export default App;

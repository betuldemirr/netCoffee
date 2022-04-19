import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <div className="div" />
        <img src={images.history} alt="about_knife" />
        <div className="div" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>

        <p className="p__opensans">
          Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
          molestias eos sapiente officiis modi at sunt excepturi expedita sint?
          Sed quibusdam recusandae alias error harum maxime adipisci amet
          laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
          voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab,
          eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto
          libero magni deleniti quod quam consequuntur!
        </p>
      </div>
    </div>
  </div>
);
export default AboutUs;

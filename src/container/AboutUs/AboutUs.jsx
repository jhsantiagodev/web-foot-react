import React from "react";
import "./aboutUs.css";
import G from "../../assets/G.png";
import spoon from "../../assets/spoon.png";
import knife from "../../assets/knife.png";

export const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={G} alt="g-Letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={spoon} alt="about-spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            magni dolorum veniam ipsa ipsum nisi ad unde, necessitatibus
            laudantium, hic earum corrupti inventore? Vel nemo ex voluptas
            impedit, modi debitis.
          </p>
          <button type="button" className="custom__button">
            know more
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={knife} alt="knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={spoon} alt="about-spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            magni dolorum veniam ipsa ipsum nisi ad unde, necessitatibus
            laudantium, hic earum corrupti inventore? Vel nemo ex voluptas
            impedit, modi debitis.
          </p>
          <button type="button" className="custom__button">
            know more
          </button>
        </div>
      </div>
    </div>
  );
};

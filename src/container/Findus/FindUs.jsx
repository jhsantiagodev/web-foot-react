import React from "react";
import { SubHeading } from "../../components/subheading/SubHeading";
import findImg from "../../assets/findus.png";

export const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans" style={{ opacity: "0.7" }}>
            Lane ends bungalow, whatcroft hall lane, ruthhead, CW9 75G
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#dcca87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            Visit Us
          </button>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={findImg} alt="findimg" />
      </div>
    </div>
  );
};

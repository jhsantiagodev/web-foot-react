import React from "react";
import "./header.css";
import { SubHeading } from "../../components/subheading/SubHeading";
import welcome from "../../assets/welcome.png";

export const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />

        <h1 className="app__header-h1">The key to fine Dining</h1>

        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          sit tellus lobortis sed senectus vivamus molestie. condimentum volapat
          facillisis quam slecerisque sapien. Et, penatibus aliquam amet tellus.
        </p>

        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={welcome} alt="welcome" />
      </div>
    </div>
  );
};

import React from "react";
import "./chef.css";
import chef from "../../assets/chef.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";
import { SubHeading } from "../../components/subheading/SubHeading";

export const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content-quote">
            <img src={quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            </p>
          </div>

          <p className="p__opensans">
            beatae facilis in nemo accusantium dolorem excepturi minus dolore.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            aspernatur esse distinctio a consectetur voluptatibus cumque eius.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Lou</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

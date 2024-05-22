import React from "react";
import "./newsLetter.css";
import { SubHeading } from "../subheading/SubHeading";

export const NewsLetter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Suscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss latest updates</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="emai" placeholder="enter your email address" />
        <button type="button" className="custom__button">
          Suscribe
        </button>
      </div>
    </div>
  );
};

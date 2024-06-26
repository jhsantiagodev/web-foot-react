import React from "react";
import "./footer.css";
import { FooterOverlay } from "../../components/footer/FooterOverlay";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { NewsLetter } from "../../components/news/NewsLetter";
import gerich from "../../assets/gericht.png";
import spoon from "../../assets/spoon.png";

export const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <NewsLetter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 w 53rd New York, NY 1009, US</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-334-5543</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={gerich} alt="gerich" />
          <p className="p__opensans">
            the best way to find yourself is to lose yourself in the services of
            others.
          </p>
          <img
            src={spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday:</p>
          <p className="p__opensans">08:00 am - 02:00 am</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">07:00 am - 11:00 am</p>
        </div>
      </div>

      <div className="app__footer-copy">
        <p className="p__opensans">2024 Gericht. All Rights reserverd &copy;</p>
      </div>
    </div>
  );
};

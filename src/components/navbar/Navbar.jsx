import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gericht from "../../assets/gericht.png";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={gericht} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>

        <li className="p__opensans">
          <a href="#about">about</a>
        </li>

        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>

        <li className="p__opensans">
          <a href="#awars">awars</a>
        </li>

        <li className="p__opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div className="separator"></div>
        <a href="/" className="p__opensans">
          Book table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide__bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>

              <li className="p__opensans">
                <a href="#about">about</a>
              </li>

              <li className="p__opensans">
                <a href="#menu">menu</a>
              </li>

              <li className="p__opensans">
                <a href="#awars">awars</a>
              </li>

              <li className="p__opensans">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

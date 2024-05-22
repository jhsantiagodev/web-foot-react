import React from "react";
import "./menuItem.css";

export const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>

        <div className="app__menuItem-separator"></div>

        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuItem-tags">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

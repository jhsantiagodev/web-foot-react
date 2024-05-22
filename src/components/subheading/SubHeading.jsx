import React from "react";
import "./subHeading.css";
import spoon from "../../assets/spoon.png";

export const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={spoon} alt="spon" className="spoon__img" />
    </div>
  );
};

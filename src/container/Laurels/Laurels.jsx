import React from "react";
import "./laurels.css";
import data from "../../data/data";
import laurelsImg from "../../assets/laurels.png";
import { SubHeading } from "../../components/subheading/SubHeading";

//Desestructura el objeto de data.awards
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />

    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

export const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awars">
      <div className="app__wrapper_info">
        <SubHeading title="Awars & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={laurelsImg} alt="laurels" />
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import "./gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components/subheading/SubHeading";
import images from "../../data/images";

const imagesGallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

export const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim esse
          autem, quidem pariatur sit dolore unde, perspiciatis vero
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesGallery.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_img-${index + 1}`}
            >
              <img src={image} alt="imageG" />
              <BsInstagram className="gallery__img-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

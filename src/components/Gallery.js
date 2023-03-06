import React from "react";
import mainImg from "../img/kelli-mcclintock-Z7uacdEYnd4-unsplash.jpg";

const Gallery = () => {
  return (
    <div className="side-gallery">
      <img
        className="side-img"
        src={mainImg}
        alt="Babymat lying on the floor"
      />
    </div>
  );
};

export default Gallery;

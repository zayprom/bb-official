import React from "react";

const SingleFeature = ({ feature }) => {
  const featureClick = () => {
    console.log("click");
  };

  return (
    <div className="feature-item" onClick={featureClick}>
      <div className="feature-img-area">
        <img
          className="feature-img"
          src={feature.featureImg}
          alt={feature.alt}
        />
      </div>
      <h3 className="feature-heading">{feature.featureName}</h3>
      <p className="feature-text">{feature.featureText}</p>
    </div>
  );
};

export default SingleFeature;

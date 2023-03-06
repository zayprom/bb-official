import React from "react";
import SingleFeature from "../components/SingleFeature";

const Features = ({ features }) => {
  return (
    <div className="section-features">
      <h2 className="heading-secondary centered">
        Proč si vybrat podložky Bunny & Bro?
      </h2>
      <div className="features-flex">
        <div className="features-grid">
          {features.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

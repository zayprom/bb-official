import React from "react";

const SimpleLink = ({ link }) => {
  return (
    <div className="simple-link-container">
      <a className="simple-link" href={link}>
        naše podložky
      </a>
      <span className="arr-right">&rarr;</span>
    </div>
  );
};

export default SimpleLink;

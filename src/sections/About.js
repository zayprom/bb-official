import React from "react";
import about from "../data/about";
import founderImg from "../img/IMG_1108.jpg";

const About = () => {
  return (
    <div id="about" className="section-about">
      <div className="about-area-text">
        <h2 className="heading-secondary">O nás</h2>
        <article className="about-main-text">
          {about.map((par) => (<p key={par.id} className="about-text">
            {par.text}
            </p>))}
          <p className="signature">Kristýna & Petar</p>
        </article>
      </div>
      <div className="about-area-img">
        <img
          className="about-img"
          src={founderImg}
          alt="Zakladatelé Bunny & Bro"
        />
      </div>
    </div>
  );
};

export default About;

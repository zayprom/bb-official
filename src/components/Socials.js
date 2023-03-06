import React from "react";
import { InstagramLogo, FacebookLogo, EnvelopeSimple } from "phosphor-react";

const Socials = ({ justify }) => {
  return (
    <div className="socials" style={{ justifyContent: justify }}>
      <div className="social">
        <a href="https://www.instagram.com/bunnyandbro/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <InstagramLogo color="var(--darkest-green)" size={32} />
        </a>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/BunnyAndBro/" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FacebookLogo color="var(--darkest-green)" size={32} />
        </a>
      </div>
      <div className="social">
        <a href="mailto:info@bunnyandbro.cz" target="_blank" rel="noopener noreferrer" title="E-mail">
          <EnvelopeSimple color="var(--darkest-green)" size={32} />
        </a>
      </div>
    </div>
  );
};

export default Socials;

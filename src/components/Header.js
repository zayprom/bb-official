import React from "react";
import headLogo from "../img/logo_centrovane.svg";
import SimpleLink from "./SimpleLink";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="header">
      <div className="header-headings">
        <div className="heading-background">
          <div className="header-logo-area">      
            <img
              className="header-logo"
              src={headLogo}
              alt="Bunny & Bro oficiální logo barevné"
            />
          </div>
          <h1 className="heading-secondary italic">
            Designové dětské hrací podložky
          </h1>
        </div>
        <div className="heading-links">
          <SimpleLink link={"#product-list"} />
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

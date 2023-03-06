import React from "react";
import navLogo from "../img/logo_horizontalni.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          className="nav-logo"
          src={navLogo}
          alt="Bunny & Bro oficiální logo"
        />
      </Link>
    </div>
  );
};

export default Logo;

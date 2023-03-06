import React from "react";
import MenuDispl from "./MenuDispl";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <MenuDispl />
    </nav>
  );
};

export default Navigation;

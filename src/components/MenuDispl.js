import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "./Button";

const MenuDispl = ({ flexDirection, display, gap, size, paddingBottom }) => {
  const goToShop = () => {
    window.open('http://eshop.bunnyandbro.cz', '_blank');
  };
  return (
    <ul
      className="nav-list"
      style={{
        flexDirection: flexDirection,
        display: display,
        gap: gap,
        fontSize: size,
        paddingBottom: paddingBottom,
      }}
    >
      <li className="nav-item">
        <Link smooth to="/#product-list" className="nav-item-link">
          produkty
        </Link>
      </li>
      <li className="nav-item">
        <Link smooth to="/#about" className="nav-item-link">
          o nás
        </Link>
      </li>
      <li className="nav-item">
        <Link smooth to="/#blocks" className="nav-item-link">
          výhody
        </Link>
      </li>
      <li className="nav-item">
        <Button onClick={goToShop} text={"e-shop"} />
      </li>
    </ul>
  );
};

export default MenuDispl;

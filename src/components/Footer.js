import React from "react";
import { Link } from "react-router-dom";
import Partners from "./Partners";
import { HashLink as HLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="section-footer">
      <footer className="footer">
        <div className="footer-logo">
          {/* <Logo size={"3.8rem"} /> */}
          <div className="footer-logo-area">Bunny & Bro</div>
          <Partners />
        </div>
        <nav className="footer-list">
          <h4 className="heading-quartiary">Užitečné odkazy</h4>
          <ul className="footer-items">
            <li className="footer-item">
              <a className="footer-link" target="_blank" rel="noopener noreferrer" href="http://eshop.bunnyandbro.cz">
                E-shop
              </a>
            </li>
            <li className="footer-item">
              <Link to="/obchodni-podminky" className="footer-link">
                Obchodní podmínky
              </Link>
            </li>
            <li className="footer-item">
              <HLink smooth to="/obchodni-podminky/#conditions-return" className="footer-link">
                Vrácení a reklamace
              </HLink>
            </li>
            <li className="footer-item">
              <Link to="/ochrana-osobnich-udaju" className="footer-link">
                Ochrana osobních údajů
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/casto-kladene-dotazy" className="footer-link">
                Často kladené dotazy
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="footer-list">
         <h4 className="heading-quartiary">Provozovatel</h4>
          <ul className="address">
            <li className="address-text">Diama s.r.o.</li>
            <li className="address-text">Kostelecká 439</li>
            <li className="address-text">250 63 Mratín</li>
            <li className="address-text">Česká republika</li>
            <li className="address-text">IČ 25626442 DIČ CZ25626442</li>
            <li className="address-text">
              <a className="footer-link" href="mailto:info@bunnyandbro.cz">
                info@bunnyandbro.cz
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <p className="footer-note">
        BunnyAndBro.cz | Copyright © 2022 Created by{" "}
        <a className="footer-link" href="https://petarzayakov.com">
          Petar Zayakov
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

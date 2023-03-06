import React from "react";
import visaLogo from "../img/partners/visa.svg"
import masterCardlogo from "../img/partners/mastercard.svg"
import applePay from "../img/partners/apple-pay.svg"
import dpdLogo from "../img/partners/dpd.png"

const Partners = () => {
  return (
    <div className="section-partners">
      <div className="partners">
        <img className="partner-icon" src={visaLogo} alt="Oficiální logo platebních karet Visa" />
        <img className="partner-icon" src={masterCardlogo} alt="Oficiální logo platebních karet MasteCard" />
        <img className="partner-icon" src={applePay} alt="Oficiální logo Apple Pay" />
        <img className="partner-icon" src={dpdLogo} alt="Oficiální logo Apple Pay" />
      </div>
    </div>
  );
};

export default Partners;

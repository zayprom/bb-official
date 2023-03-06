import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="layout">
      <Navigation />
      <section className="section-features">
        <h2 className="heading-secondary">Stránka nenalezena</h2>
      </section>
      <Footer />
    </div>
  );
};

export default Error;

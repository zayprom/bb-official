import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

const ReturnPolicy = () => {
  // Start the page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <Navigation />
      <MobileNavigation />
      <section className="section-conditions">
        <h2 className="heading-secondary">Vrácení a reklamace</h2>
      </section>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;

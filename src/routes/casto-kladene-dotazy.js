import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import MobileNavigation from "../components/MobileNavigation";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import { Helmet } from "react-helmet";

import questions from "../data/questions";

const Faq = () => {

  // Start the page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <Helmet>
        <title>Bunny & Bro - Často kladené dotazy | FAQ</title>
        <meta name="description" content="Designové dětské hrací podložky Bunny & Bro - často kladené dotazy." />
        <meta property="og:title" content="Bunny & Bro - často kladené dotazy" />
        <meta
          property="og:description"
          content="Designové dětské hrací podložky Bunny & Bro - často kladené dotazy"
        />
      </Helmet>
      <Navigation />
      <MobileNavigation />
      <section className="section-faq">
        <h2 className="heading-secondary">Často kladené dotazy</h2>
        <Questions questions={questions} />
      </section>
      <Footer />
    </div>
  );
};
export default Faq;

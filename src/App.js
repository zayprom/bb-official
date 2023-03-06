import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./sections/Features";
import Products from "./sections/Products";
import Puzzles from "./sections/Puzzles";
import About from "./sections/About";

import Blocks from "./sections/Blocks";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";


import features from "../src/data/features"
import products from "./data/products";
import puzzles from "./data/puzzles";

function App() {
  return (
    <div className="main">
      <Navigation />
      <MobileNavigation />
      <Header />
      <div className="blob-background">
        <Features features={features} />
        <Products products={products} />
        <Puzzles puzzles={puzzles} />
      </div>
      <Blocks />
      <About />
      <Footer />
    </div>
  );
}

export default App;

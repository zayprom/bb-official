import React from "react";
import SingleProduct from "../components/SingleProduct";

const Puzzles = ({ puzzles }) => {
  return (
    <div id="product-list" className="product-list">
      <h2 className="heading-secondary centered">Pěnové puzzle</h2>
      <div className="products-grid three-col">
        {puzzles.map((puzzle) => (
          <SingleProduct key={puzzle.id} product={puzzle} />
        ))}
      </div>
    </div>
  );
};

export default Puzzles;

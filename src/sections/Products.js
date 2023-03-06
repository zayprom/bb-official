import React from "react";
import SingleProduct from "../components/SingleProduct";

const Products = ({ products }) => {
  return (
    <div id="product-list" className="product-list">
      <h2 className="heading-secondary centered">Naše podložky</h2>
      <div className="products-grid">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

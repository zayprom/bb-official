import React from "react";
// import productImg from "../img/head-img.jpg";
import Button from "./Button";

const SingleProduct = ({ product }) => {
  const goToProduct = () => {
    window.open(product.url, '_blank');
  };
  return (
    <div className="single-product-card">
      <img
        className="single-product-img"
        src={product.img}
        alt={product.alt}
      />

      <h3 className="single-product-heading">{product.heading}</h3>
      <h4 className="single-product-subheading">{product.subheading}</h4>
      <h4 className="single-product-subheading">{product.subheadingTwo}</h4>
      <p className="single-product-price">Cena: {product.price}</p>
      <div className="btn-area">
        <Button onClick={goToProduct} text={"více info"} color={"#F5D1C3"} />
      </div>
    </div>
  );
};

export default SingleProduct;

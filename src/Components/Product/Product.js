import React from "react";
import "./Product.css";

/* This is a functional Component, doesn't have any state of its own it will just receive props 
    and will render a component to display he product title, price and add to cart button
*/
export default function Product({ onAddToCartClick, price, title }) {
  return (
    <div className="Product">
      <h2 className="Product-title">{title}</h2>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
}

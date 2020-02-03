import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";

/*
Receives an array of items and determines how to display them
Checking to see if there are items in the cart to display them and if not display empty cart message
Mapping over the items in the array and converting them into CartItem Component 
Below list of items we are displaying the total cost of items in the cart
toFixed(2) is used to format the total cost into decimal places
*/

export default function Cart({ itemsInCart, totalCost }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}

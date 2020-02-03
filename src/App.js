import React from "react";
import items from "./api/items";
import logo from "./logo.svg";
import Product from "./Components/Product/Product";
import "./App.css";

/* 
here we are importing our items from our API and adding basic layout
then we are rendering our products and mapping over our item array and turning the item in array into a product component
by passing the required props to each product along with key prop to update the DOM
*/

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">Dreamcast Shop</h1>
      </header>
      <main className="App-shop">
        <div className="App-products">
          {items.map(item => (
            <Product key={item.title} title={item.title} price={item.price} />
          ))}
        </div>
      </main>
    </div>
  );
}

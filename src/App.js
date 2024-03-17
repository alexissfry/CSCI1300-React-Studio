import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.item.name === item.name
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  const total = cart.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );

  return (
    <div className="App">
      <div className="bakery-container">
        <h1>Alexis' Bakery</h1>
        <div className="row">
          {bakeryData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <BakeryItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((cartItem, index) => (
              <li key={index}>
                {cartItem.quantity}x {cartItem.item.name} - $
                {(cartItem.item.price * cartItem.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p className="total">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

import "../BakeryItem.css";
import React from "react";
import bakeryData from "../assets/bakery-data.json";

const BakeryItem = ({ item, addToCart }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-img-top" />
      <div>
        <p className="card-title">{item.name}</p>
        <p className="card-text">{item.description}</p>
        <div className="price-button">
          <p className="card-text">Price: ${item.price}</p>
          <button
            className="bakery-item-cart-button"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Bakery = () => {
  return (
    <div>
      <div>
        {bakeryData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <BakeryItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakeryItem;

import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, inStock = true } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button className="primary" onClick={() => onToggleSoldOut(id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleSoldOut(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

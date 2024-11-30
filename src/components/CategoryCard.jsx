import React from "react";
import "../styles/CategoryCard.css";

function CategoryCard({ img, type, quantity }) {
  return (
    <div className="category-card-comp">
      <img src={img} alt="Category-img" className="category-comp-img" />
      <div className="category-comp-details">
        <span className="category-comp-type">{type}</span>
        <span className="category-comp-quantity">{quantity}</span>
      </div>
    </div>
  );
}

export default CategoryCard;

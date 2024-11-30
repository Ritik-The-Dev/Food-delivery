import React from "react";
import "../styles/ProductCard.css";
import { Images } from "../asests";

function ProductsCard({ title, desc, price, img }) {
  return (
    <div className="product-card-comp">
      <div className="product-card-details">
        <span className="product-card-title">{title}</span>
        <span className="product-card-desc">{desc}</span>
        <span className="product-card-price">{price}</span>
      </div>
      <div className="product-card-img">
        <img src={img} alt="product image" className="product-comp-image" />
        <div className="right-banner-product">
          <img src={Images.add} alt="+" className="add-btn" />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;

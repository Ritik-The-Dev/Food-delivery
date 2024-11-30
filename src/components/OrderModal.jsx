import React from "react";
import { Images } from "../asests";
import "../styles/OrderModal.css";

function OrderModal({ tagline, desc }) {
  return (
    <div className="order-modal">
      <div className="order-logo-modal">
        <img src={Images.Logo} alt="logo" className="order-logo" />
        <span className="order-now">now</span>
      </div>
      <span className="order-tagline">{tagline}</span>
      <span className="order-desc">{desc}</span>
    </div>
  );
}

export default OrderModal;

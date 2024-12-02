import React from "react";
import "../styles/DealsCard.css";
import { Images } from "../asests";

function DealsCard({ img, discount, type, name, productPage = false }) {
  return (
    <div className="deals-card-component-main">
      <div
        className="deals-card-component"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="deals-card-inner">
          <div className="discount-div">
            <span className="discount-tab">{discount}</span>
          </div>
          <div className="deals-type">
            <div className="deals-type-inner">
              <span className="deal-type">{type}</span>
              <span className="deal-name">{name}</span>
            </div>
            {productPage && (
              <div className="right-banner">
                <img src={Images.add} alt="+" className="add-btn" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="deals-type-inner-res">
        <span className="deal-type">{type}</span>
        <span className="deal-name">{name}</span>
      </div>
    </div>
  );
}

export default DealsCard;

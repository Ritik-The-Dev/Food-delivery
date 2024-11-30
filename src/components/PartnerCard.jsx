import React from "react";
import "../styles/PartnerCard.css";

function PartnerCard({ img, tagline, type, name }) {
  return (
    <div
      className="partner-card-component"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="partner-card-inner">
        <div className="tagline-div">
          <span className="tagline-tab">{tagline}</span>
        </div>
        <div className="partner-type">
          <span className="partner-desc-type">{type}</span>
          <span className="partner-desc-name">{name}</span>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;

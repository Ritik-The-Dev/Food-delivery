import React from "react";
import "../styles/PopularCard.css";

function PopularCard({ img, type }) {
  return (
    <div className={`${type==="Texas Chicken" ? 'border-2' : ''} popular-card-comp`}>
      <img src={img} alt="popular-img" className="popular-comp-img" />
      <div className={` popular-comp-details`}>
        <span className="popular-comp-type">{type}</span>
      </div>
    </div>
  );
}

export default PopularCard;

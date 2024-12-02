import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PopularCard.css";

function PopularCard({ img, type, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        id ? navigate(`/restaurants/${id}`) : "";
      }}
      className={`${
        type === "Texas Chicken" ? "border-2" : ""
      } popular-card-comp`}
    >
      <img src={img} alt="popular-img" className="popular-comp-img" />
      <div className={` popular-comp-details`}>
        <span className="popular-comp-type">{type}</span>
      </div>
    </div>
  );
}

export default PopularCard;

import React from "react";
import "../styles/ReviewCard.css";
import { Images } from "../asests";

function ReviewCard({ img, location, name, rating, date, comment }) {
  return (
    <div className="review-card-component">
      <div className="review-card-upper">
        <div className="review-card-upper-left">
          <img src={img} alt="Profile" className="review-profile-img" />
          <div className="upper-left-details">
            <span className="review-card-name">{name}</span>
            <span className="review-card-location">{location}</span>
          </div>
        </div>
        <div className="review-card-upper-right">
          <div className="review-card-ratings">
            {Array(rating)
              .fill(0)
              .map((e, index) => (
                <img className="star-rating" key={index} src={Images.star} />
              ))}
          </div>
          <div className="review-card-timing">
            <img src={Images.orangeClock} className="review-timing-clock" />
            <span className="review-timing-date">{date}</span>
          </div>
        </div>
      </div>
      <div className="review-card-bottom">{comment}</div>
    </div>
  );
}

export default ReviewCard;

import React from "react";
import "../styles/Profile.css";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const savedCards = [
    {
      id: 1,
      number: "xxxx xxxx xxxx 1234",
      type: "Mastercard",
    },
    {
      id: 2,
      number: "xxxx xxxx xxxx 6789",
      type: "Rupay",
    },
    {
      id: 3,
      number: "xxxx xxxx xxxx 3468",
      type: "Rupay",
    },
  ];
  return (
    <div className="profile-main-div">
      <div className="profile-inner-div">
        <div className="title-payment">
          <img
            src={Images.leftarrow}
            className="left-arrow-order-details"
            onClick={() => navigate(-1)}
            alt="Back"
          />
          <span>My Profile</span>
        </div>
        <div className="profile-data-div">
          <div className="img-name-edit-div">
            <div className="img-name-div">
              <img src={Images.profilepic} className="profile-main-img" />
              <span>Mike Ross</span>
            </div>
            <button className="edit-btn-profile">Edit</button>
          </div>
          <div className="details-edit-div">
            <div className="input-forms">
              <label htmlFor="Name" className="label-input">
                Full Name
              </label>
              <input
                type="text"
                className="input-value"
                placeholder="John Doe"
              />
            </div>
            <div className="input-forms">
              <label htmlFor="Email" className="label-input">
                Email Address
              </label>
              <input
                type="email"
                className="input-value"
                placeholder="user@gmail.com"
              />
            </div>
            <div className="input-forms">
              <label htmlFor="Gender" className="label-input">
                Gender
              </label>
              <input type="text" className="input-value" placeholder="Male" />
            </div>
            <div className="input-forms">
              <label htmlFor="Country" className="label-input">
                Country
              </label>
              <input
                type="text"
                className="input-value"
                placeholder="Mike Ross"
              />
            </div>
          </div>
        </div>
        <div className="saved-cards-div">
          <span>Saved Payment Methods</span>
          <div className="saved-cards">
            {savedCards.map((e) => (
              <div key={e.id} className="saved-card-comp">
                <div className="card-logo-div">
                  <img src={Images.card} className="saved-card-img" />
                </div>
                <div className="saved-card-details">
                  <span className="saved-card-number">{e.number}</span>
                  <span>{e.type}</span>
                </div>
                <img src={Images.edit} className="saved-card-edit" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

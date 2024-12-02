import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";
import { userData } from "../recoil/recoil";
import { useRecoilValue } from "recoil";
import { toast } from "react-hot-toast";
import axios from "axios";
import { EDIT_PROFILE } from "../api";

function Profile() {
  const token = localStorage.getItem("token")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const UserData = useRecoilValue(userData);
  const navigate = useNavigate();

  const savedCards = [
    {
      _id: 1,
      number: "xxxx xxxx xxxx 1234",
      type: "Mastercard",
    },
    {
      _id: 2,
      number: "xxxx xxxx xxxx 6789",
      type: "Rupay",
    },
    {
      _id: 3,
      number: "xxxx xxxx xxxx 3468",
      type: "Rupay",
    },
  ];

  useEffect(() => {
    if (UserData) {
      setName(UserData.username);
      setEmail(UserData.email);
      setGender(UserData.gender);
      setAddress(UserData.address);
    } else {
      navigate("/login");
      toast.error("Login to visit profile.");
    }
  }, [UserData, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (isUpdated) {
        setLoading(true);
        const updatedData = { username: name, email, gender, address };
        await axios.put(EDIT_PROFILE, updatedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Profile updated successfully!");
        window.location.reload()
      } else {
        toast.error("No changes detected.");
      }
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "gender") setGender(value);
    if (name === "address") setAddress(value);

    setIsUpdated(
      value !== UserData[name] 
    );
  };

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
              <span>{UserData.username}</span>
            </div>
            <button className="edit-btn-profile" onClick={handleEditClick}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
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
                value={name}
                name="name"
                onChange={handleChange}
                disabled={!isEditing}
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
                value={email}
                name="email"
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-forms">
              <label htmlFor="Gender" className="label-input">
                Gender
              </label>
              <input
                type="text"
                className="input-value"
                placeholder="Male"
                value={gender}
                name="gender"
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="input-forms">
              <label htmlFor="Address" className="label-input">
                Address
              </label>
              <input
                type="text"
                className="input-value"
                placeholder="Mike Ross"
                value={address}
                name="address"
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
        <div className="saved-cards-div">
          <span>Saved Payment Methods</span>
          <div className="saved-cards">
            {savedCards.map((e) => (
              <div key={e._id} className="saved-card-comp">
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
        {isEditing && (
          <div className="save-profile-btn">
            <button
              className="save-btn"
              onClick={handleSaveClick}
              disabled={loading || !isUpdated}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;

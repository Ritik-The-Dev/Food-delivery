import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";
import { userData } from "../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { ADD_CARD, DELETE_CARD, EDIT_CARD, EDIT_PROFILE } from "../api";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Profile() {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [addCard, setShowCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [newCardDetails, setNewCardDetails] = useState({});
  const [UserData, setUserData] = useRecoilState(userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData) {
      setName(UserData.username);
      setEmail(UserData.email);
      setGender(UserData.gender);
      setCountry(UserData?.country || "India");
    } else {
      navigate("/login");
      toast.error("Login to visit profile.");
    }
  }, [UserData, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "gender") setGender(value);
    if (name === "country") setCountry(value);

    setIsUpdated(value !== UserData[name]);
  };

  const handleSaveClick = async () => {
    try {
      if (isUpdated) {
        setLoading(true);
        const updatedData = { username: name, email, gender, country };
        await axios.put(EDIT_PROFILE, updatedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Profile updated successfully!");
        setUserData((prev) => ({ ...prev, ...updatedData }));
        setIsEditing(false);
      } else {
        toast.error("No changes detected.");
      }
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (
      !newCardDetails.cardNumber ||
      !newCardDetails.expiration ||
      !newCardDetails.cvc ||
      !newCardDetails.name
    ) {
      toast.error("All card fields are required");
      return;
    }

    try {
      setLoading(true);
      await axios.put(ADD_CARD, newCardDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Card added successfully!");
      setShowCard(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add card.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (
      !newCardDetails.cardNumber ||
      !newCardDetails.expiration ||
      !newCardDetails.cvc ||
      !newCardDetails.name
    ) {
      toast.error("All card fields are required");
      return;
    }

    try {
      setLoading(true);
      await axios.put(`${EDIT_CARD}/${newCardDetails._id}`, newCardDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Card updated successfully!");
      setEditCard(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update card.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (cardId) => {
    try {
      setLoading(true);
      await axios.delete(`${DELETE_CARD}/${cardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditCard(false);
      toast.success("Card deleted successfully!");
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete card.");
    } finally {
      setLoading(false);
    }
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
            <button
              className="edit-btn-profile"
              onClick={
                isEditing ? !loading && handleSaveClick : handleEditClick
              }
            >
              {isEditing ? (loading ? "Saving..." : "Save") : "Edit"}
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
                style={{
                  border: isEditing ? "0.5px solid #00000080" : "",
                }}
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
                style={{
                  border: isEditing ? "0.5px solid #00000080" : "",
                }}
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
                style={{
                  border: isEditing ? "0.5px solid #00000080" : "",
                }}
              />
            </div>
            <div className="input-forms">
              <label htmlFor="Address" className="label-input">
                Country
              </label>
              <input
                type="text"
                className="input-value"
                placeholder="India"
                value={country}
                name="country"
                onChange={handleChange}
                disabled={!isEditing}
                style={{
                  border: isEditing ? "0.5px solid #00000080" : "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="saved-cards-div">
          <span>Saved Payment Methods</span>
          <div className="saved-cards">
            {UserData.paymentCards && UserData.paymentCards.length
              ? UserData.paymentCards.map((e) => (
                  <div
                    key={e._id}
                    className="saved-card-comp"
                    onClick={() => {
                      setEditCard(true);
                      setNewCardDetails(e);
                    }}
                  >
                    <div className="card-logo-div">
                      <img src={Images.card} className="saved-card-img" />
                    </div>
                    <div className="saved-card-details">
                      <span className="saved-card-number">
                        {e.cardNumber.slice(0, 4)} XXXX XXXX
                      </span>
                      <span>{e.name}</span>
                    </div>
                    <img src={Images.edit} className="saved-card-edit" />
                  </div>
                ))
              : undefined}
            <div className="saved-card-comp" onClick={() => setShowCard(true)}>
              <div className="card-logo-div">
                <img src={Images.add1} className="saved-card-img" />
              </div>
              <div className="saved-card-details">
                <span className="saved-card-number">Add New Card</span>
                <span>Mastercard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addCard ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-inner-content">
              <div className="title-modal-payment-cards">
                <h2>Add Payment Method</h2>
                <img
                  src={Images.plus}
                  className="close-img"
                  onClick={() => {
                    setShowCard(false);
                    setNewCardDetails({});
                  }}
                />
              </div>
              <form className="payment-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    value={newCardDetails.cardNumber}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        cardNumber: e.target.value,
                      }))
                    }
                    placeholder="XXXX XXXX XXXX 1234"
                    maxLength={19}
                  />
                </div>
                <div className="form-group">
                  <label>Expiration</label>
                  <input
                    type="text"
                    value={newCardDetails.expiration}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        expiration: e.target.value,
                      }))
                    }
                    placeholder="11/26"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    value={newCardDetails.cvc}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        cvc: e.target.value,
                      }))
                    }
                    placeholder="XXX"
                    maxLength={3}
                  />
                </div>
                <div className="form-group">
                  <label>Name on Card</label>
                  <input
                    type="text"
                    value={newCardDetails.name}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Mike Ross"
                  />
                </div>
              </form>
            </div>
            <div className="modal-actions">
              <button
                className="btn-remove"
                style={{
                  visibility: "hidden",
                }}
              >
                Remove
              </button>
              <div className="right-btn-modals">
                <button
                  className="btn-cancel"
                  onClick={() => {
                    setShowCard(false);
                    setNewCardDetails({});
                  }}
                >
                  Cancel
                </button>
                <button className="btn-save" onClick={handleAdd}>
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
      {editCard ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-inner-content">
              <div className="title-modal-payment-cards">
                <h2>Edit Payment Method</h2>
                <img
                  src={Images.plus}
                  className="close-img"
                  onClick={() => {
                    setEditCard(false);
                    setNewCardDetails({});
                  }}
                />
              </div>
              <form className="payment-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    value={newCardDetails.cardNumber}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        cardNumber: e.target.value,
                      }))
                    }
                    placeholder="XXXX XXXX XXXX 1234"
                    maxLength={19}
                  />
                </div>
                <div className="form-group">
                  <label>Expiration</label>
                  <input
                    type="text"
                    value={newCardDetails.expiration}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        expiration: e.target.value,
                      }))
                    }
                    placeholder="11/26"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    value={newCardDetails.cvc}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        cvc: e.target.value,
                      }))
                    }
                    placeholder="XXX"
                    maxLength={3}
                  />
                </div>
                <div className="form-group">
                  <label>Name on Card</label>
                  <input
                    type="text"
                    value={newCardDetails.name}
                    onChange={(e) =>
                      setNewCardDetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Mike Ross"
                  />
                </div>
              </form>
            </div>
            <div className="modal-actions">
              <button
                className="btn-remove"
                onClick={() => handleRemove(newCardDetails._id)}
              >
                Remove
              </button>
              <div className="right-btn-modals">
                <button
                  className="btn-cancel"
                  onClick={() => {
                    setEditCard(false);
                    setNewCardDetails({});
                  }}
                >
                  Cancel
                </button>
                <button className="btn-save" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
      {loading ? <Loader text={"Updating Profiles ..."} /> : undefined}
    </div>
  );
}

export default Profile;

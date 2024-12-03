import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userData } from "../recoil/recoil";
import { Images } from "../asests";
import { ADD_ADRESS, DELETE_ADRESS, EDIT_ADRESS } from "../api";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

function Address({ setCurrentAdress, setCurrentPage }) {
  const token = localStorage.getItem("token");
  const [UserData, setUserData] = useRecoilState(userData);
  const [AddressData, setAddressData] = useState({
    state: "",
    city: "",
    pincode: "",
    number: "",
    fulladdress: "",
  });
  const [AddAdress, ShowAddress] = useState(false);
  const [EditMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...AddressData, [name]: value });
  };

  const handleAddAddress = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(ADD_ADRESS, AddressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newAddress = {
        ...AddressData,
        _id: data._id,
      };
      setUserData({ ...UserData, address: [...UserData.address, newAddress] });
      setAddressData({
        state: "",
        city: "",
        pincode: "",
        number: "",
        fulladdress: "",
      });
      ShowAddress(false);
      toast.success("Address added successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to Add Address.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditAddress = async () => {
    try {
      setLoading(true);
      await axios.put(`${EDIT_ADRESS}/${AddressData._id}`, AddressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedAddresses = UserData.address.map((addr) =>
        addr._id === AddressData._id ? AddressData : addr
      );

      setUserData({ ...UserData, address: updatedAddresses });
      setAddressData({
        state: "",
        city: "",
        pincode: "",
        number: "",
        fulladdress: "",
      });
      ShowAddress(false);
      setEditMode(false);
      toast.success("Address updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update address.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${DELETE_ADRESS}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedAddresses = UserData.address.filter(
        (addr) => addr._id !== id
      );
      setUserData({ ...UserData, address: updatedAddresses });
      toast.success("Address deleted successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete address.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (address) => {
    setAddressData(address);
    setEditMode(true);
    ShowAddress(true);
  };

  return (
    <div className="checkout-outer-div">
      <div className="adress-inner-div">
        <div className="title-checkout">
          <img
            src={Images.leftarrow}
            className="left-arrow-order-details"
            onClick={() => setCurrentPage("checkout")}
          />
          <span>Your Addresses</span>
        </div>
        <div className="address-main-div">
          <div
            className="addres-data-div dott"
            onClick={() => {
              ShowAddress(true);
              setEditMode(false);
            }}
          >
            <div className="add-address-div">
              <div className="rounded-color">
                <img src={Images.add1} alt="Add Address" />
              </div>
              <span>Add Address</span>
            </div>
          </div>
          {UserData.address.length
            ? UserData.address.map((e, index) => (
                <div key={e._id} className="addres-data-div-main">
                  <div
                    className="address-top"
                    onClick={() => {
                      setCurrentAdress(e.fulladdress);
                      setCurrentPage("checkout");
                    }}
                  >
                    <div className="address-inner-head">
                      <span className="address-city">{e.city}</span>
                      {index === 0 ? (
                        <span className="default-address">Default</span>
                      ) : undefined}
                    </div>
                    <span className="full-address">
                      {e.fulladdress.length > 50
                        ? e.fulladdress.slice(0, 50) + "..."
                        : e.fulladdress}
                    </span>
                    <span className="adress-number">
                      Phone Number: {e.number}
                    </span>
                  </div>
                  <div className="address-bottom">
                    <button
                      className="Edit-adress-btn"
                      onClick={() => openEditModal(e)}
                    >
                      Edit
                    </button>
                    <button
                      className="Remove-adress-btn"
                      onClick={() => handleDeleteAddress(e._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            : undefined}
        </div>
      </div>
      {AddAdress ? (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (!e.target.closest(".modal-content-address")) {
              ShowAddress(false);
            }
          }}
        >
          <div className="modal-content-address">
            <h3 className="Add-address">
              {EditMode ? "Edit Address" : "Add Address"}
            </h3>
            <form className="Adress-data-form">
              <div className="input-add-adress">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={AddressData.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City/District"
                  value={AddressData.city}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code"
                  value={AddressData.pincode}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  value={AddressData.number}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="fulladdress"
                placeholder="Enter full address"
                value={AddressData.fulladdress}
                onChange={handleChange}
                className="add-fulladdres"
              />
            </form>
            <div className="address-actions-div">
              <button
                className="save-btn"
                onClick={EditMode ? handleEditAddress : handleAddAddress}
              >
                {EditMode ? "Save Changes" : "Add Address"}
              </button>
            </div>
          </div>
        </div>
      ) : undefined}
      {loading ? <Loader text={"Updating User Adresses"} /> : undefined}
    </div>
  );
}

export default Address;

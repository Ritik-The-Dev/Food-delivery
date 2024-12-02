import React, { useState } from "react";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";
import axios from "axios";
import { PLACE_ORDER } from "../api";
import toast from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sharedCart, userData } from "../recoil/recoil";

function Payment({ setCurrentPage, orderItems, subTotal }) {
  const setUserData = useSetRecoilState(userData);
  const [paymentPage, setPaymentPage] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const SharedCart = useRecoilValue(sharedCart);

  const AllPaymentCards = [
    { _id: 1, name: "MaestroKard" },
    { _id: 2, name: "Paypol" },
    { _id: 3, name: "Strike" },
  ];

  const handlePaymentSelect = (paymentName) => {
    setPaymentOption(paymentName);
  };

  const placeOrder = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.put(
        PLACE_ORDER,
        {
          totalPrice: subTotal + 10,
          type: SharedCart ? "shared" : "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.result) {
        setPaymentPage(paymentOption ? true : false);
      } else {
        throw new Error("Failed to Complete Payment.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="payment-outer-div">
      {paymentPage ? (
        <div className="payment-complete-div">
          <div className="payment-completed-div">
            <img src={Images.paymentIcon} className="payment-complete-icon" />
            <span className="order-placed-text">Order Placed Successfully</span>
            <span className="order-confirmed-text">
              Your order is confirmed and on its way. Get set to savor your
              chosen delights!
            </span>
            <div className="order-confirmed-items">
              {orderItems.map((e, index) => (
                <span className="order-confirmed-items-span" key={index}>
                  {e.name}
                </span>
              ))}
              <button
                className="backtohome"
                onClick={() => {
                  navigate("/");
                  setUserData((prev) => ({
                    ...prev,
                    cart: [],
                  }));
                  if (SharedCart) {
                    window.location.reload();
                  }
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="payment-inner-div">
          <div className="title-payment">
            <img
              src={Images.leftarrow}
              className="left-arrow-order-details"
              onClick={() => setCurrentPage("checkout")}
              alt="Back"
            />
            <span>Choose and pay</span>
          </div>
          <div className="payment-upper-div">
            <div className="payment-items-div">
              <div
                className="payment-address"
                onClick={() => setPaymentOption("Zeldapay")}
                style={{
                  backgroundColor:
                    paymentOption === "Zeldapay" ? "#FFF5D1" : "",
                }}
              >
                <div className="payment-adress-left">
                  <div className="payment-pin">
                    <img
                      src={Images.wallet}
                      className="payment-order-map-pin"
                      alt="Wallet"
                    />
                  </div>
                  <div className="payment-adress-details">
                    <span className="payment-adress-title">Zeldapay</span>
                    <span className="payment-adress-main">
                      Available balance: £183.43
                    </span>
                  </div>
                </div>
                <img
                  src={Images.arrow}
                  className="payment-right-arrow"
                  alt="Arrow"
                />
              </div>
              <div className="all-payments-cards">
                {AllPaymentCards.map((e) => (
                  <div
                    key={e._id}
                    className={`payment-address-card ${
                      paymentOption === e.name ? "selected" : ""
                    }`}
                    onClick={() => handlePaymentSelect(e.name)}
                  >
                    <div className="payment-adress-left">
                      <div className="payment-pin-card">
                        <span className="case-upper-img">
                          {e.name[0].toUpperCase()}
                        </span>
                      </div>
                      <div className="payment-adress-details">
                        <span className="payment-adress-title">{e.name}</span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={paymentOption === e.name}
                      className="payment-card-checkbox"
                    />
                  </div>
                ))}
              </div>
              <div className="payment-address-card">
                <div className="payment-adress-left">
                  <img
                    src={Images.add1}
                    className="add-debit-card"
                    alt="Add Debit Card"
                  />
                  <div className="payment-adress-details">
                    <span className="payment-adress-title">Add Debit Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-price-div">
              <div className="payment-total-prices">
                <div className="subtotal-payment-price-span">
                  <span className="sub-total-item">Amount to be paid</span>
                  <span className="sub-total-price">₹{subTotal}</span>
                </div>
                <button
                  onClick={loading ? undefined : placeOrder}
                  className="choose-payment-btns"
                  style={{
                    backgroundColor: paymentOption ? "#FC8A06" : "gray",
                  }}
                >
                  Proceed Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;

import React, { useState } from "react";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

function Payment() {
  const [paymentPage, setPaymentPage] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const navigate = useNavigate();

  const AllPaymentCards = [
    { id: 1, name: "MaestroKard" },
    { id: 2, name: "Paypol" },
    { id: 3, name: "Strike" },
  ];

  const handlePaymentSelect = (paymentName) => {
    setPaymentOption(paymentName);
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
              {["Royal Cheese Burger", "Potato Veggies", "Coke Coca Cola"].map(
                (e) => (
                  <span>{e}</span>
                )
              )}
              <button className="backtohome" onClick={() => navigate("/")}>
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
              onClick={() => navigate("/checkout")}
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
                    key={e.id}
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
              <div
                className="payment-address-card"
                onClick={() => navigate("/profile")}
              >
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
                  <span className="sub-total-price">₹240</span>
                </div>
                <button
                  onClick={() => setPaymentPage(paymentOption ? true : false)}
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

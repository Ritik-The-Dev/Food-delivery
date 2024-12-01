import React from "react";
import { Images } from "../asests";
import PopularCard from "../components/PopularCard";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate()

  const orderItems = [
    {
      id: 1,
      img: Images.product1,
      name: "Royal Cheese Burger",
      quantity: 1,
      price: 120,
    },
    {
      id: 2,
      img: Images.product1,
      name: "Potato Veggies",
      quantity: 1,
      price: 70,
    },
    {
      id: 3,
      img: Images.product1,
      name: "Coke Coca Cola",
      quantity: 1,
      price: 40,
    },
  ];

  const SimilarRestraunts = [
    {
      id: 1,
      img: Images.Popular1,
      type: "McDonald’s London ",
    },
    {
      id: 2,
      img: Images.Popular2,
      type: "Papa Johns",
    },
    {
      id: 3,
      img: Images.Popular3,
      type: "KFC West London",
    },
    {
      id: 4,
      img: Images.Popular4,
      type: "Texas Chicken",
    },
    {
      id: 5,
      img: Images.Popular5,
      type: "Burger King",
    },
    {
      id: 6,
      img: Images.Popular6,
      type: "Shaurma 1",
    },
  ];

  return (
    <div className="checkout-outer-div">
      <div className="checkout-inner-div">
        <div className="title-checkout">
          <img src={Images.leftarrow} className="left-arrow-order-details" onClick={()=>navigate('/restaurants?cart=true')}/>
          <span>Your Order Details</span>
        </div>
        <div className="checkout-upper-div">
          <div className="order-items-div">
            <div className="order-items-inner">
              {orderItems.map((e) => (
                <div
                  key={e.id}
                  className="order-details-component"
                  style={{
                    borderTop: e.id === 1 ? "none" : "1px solid #202938",
                  }}
                >
                  <div className="checkout-order-imgdescdiv">
                    <img src={e.img} className="order-img-checkout" />
                    <div className="checkout-order-desc">
                      <span className="order-item-name">{e.name}</span>
                      <span className="order-item-quantity">
                        {e.quantity}x item
                      </span>
                    </div>
                  </div>
                  <span className="order-item-price">₹{e.price}</span>
                </div>
              ))}
            </div>
            <div className="checkout-order-note">
              <span className="checkout-order-notes-span">Notes</span>
              <input
                type="text"
                className="Order-notes-input"
                placeholder="Add order notes"
              />
            </div>
          </div>
          <div className="order-price-div">
            <div className="checkout-address">
              <div className="checkout-adress-left">
                <div className="order-pin">
                  <img src={Images.pin} className="checkout-order-map-pin" />
                </div>
                <div className="checkout-adress-details">
                  <span className="checkout-adress-title">
                    Delivery Address
                  </span>
                  <span className="checkout-adress-main">
                    Kawungcarang road no 28...
                  </span>
                </div>
              </div>
              <img src={Images.arrow} className="checkout-right-arrow" />
            </div>
            <div className="checkout-total-prices">
              <div className="items-price-span">
                <span>Items</span>
                <span className="item-price-bold">₹230</span>
              </div>
              <div className="items-price-span">
                <span>Sales Tax</span>
                <span className="item-price-bold">₹10</span>
              </div>
              <div className="subtotal-price-span">
                <span className="sub-total-item">Subtotal (3 items)</span>
                <span className="sub-total-price">₹240</span>
              </div>
            </div>
            <button onClick={()=>navigate('/payment')} className="choose-payment-btn">
              Choose Payment Method
            </button>
          </div>
        </div>
        <div className="Popular-section">
          <span className="Popular-tagline">Similar Restaurants</span>
          <div className="Popular-cards-div">
            {SimilarRestraunts.map((e) => (
              <PopularCard img={e.img} type={e.type} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

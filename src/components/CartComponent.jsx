import React, { useEffect, useState } from "react";
import "../styles/CartComponent.css";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";

function CartComponent({ cartItems }) {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(3);
  const [deliveryFees, setDeliveryFees] = useState(3);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((e) => (total += Number(e.price)));
    setSubTotal(total);
  }, []);

  return (
    <div className="cart-component-main">
      <div className="card-head">
        <img src={Images.basket} className="basket-img" />
        <span className="basket-head">My Basket</span>
      </div>
      <div className="cart-items-div">
        {cartItems.map((e, index) => (
          <div className="cart-item-map" key={index}>
            <span className="cart-item-quantity">{e.quantity}x</span>
            <div className="cart-item-details">
              <span className="cart-item-price">{e.price}₹</span>
              <span className="cart-item-name">{e.name}</span>
              <span className="cart-item-desc">{e.desc}</span>
            </div>
            <img src={Images.deletes} className="cart-item-delete" />
          </div>
        ))}
      </div>
      <div className="cart-charges">
        <span className="cart-charge-name">
          Sub Total:<span className="cart-charge-price">₹{subTotal}.00</span>
        </span>
        <span className="cart-charge-name">
          Discounts:<span className="cart-charge-price">-₹{discount}.00</span>
        </span>
        <span className="cart-charge-name">
          Delivery Fee:
          <span className="cart-charge-price">₹{deliveryFees}.00</span>
        </span>
      </div>
      <div className="cart-total">
        <div className="cart-total-inner">
          <span className="total-span">Total to pay</span>
          <span className="total-price">₹{subTotal}.00</span>
        </div>
      </div>
      <div className="cart-freebies">
        <div className="extra-cart-item">
          <span className="extra-cart-title">Choose your free item..</span>
          <img src={Images.arrowRight} className="extra-cart-icons" />
        </div>
        <div className="extra-cart-item">
          <span className="extra-cart-title">Apply Coupon Code here</span>
          <img src={Images.arrowRight} className="extra-cart-icons-1" />
        </div>
      </div>
      <div className="delivery-options">
        <div className="home-delivery">
          <img src={Images.scooter} className="delivery-img" />
          <span className="delivery-type-title">Delivery</span>
          <span className="delivery-type-timings">Starts at 17:50</span>
        </div>
        <div className="home-delivery">
          <img src={Images.shop} className="delivery-img" />
          <span className="delivery-type-title">Collection</span>
          <span className="delivery-type-timings">Starts at 16:50</span>
        </div>
      </div>
      <button className="checkoutBtn" onClick={() => navigate("/checkout")}>
        <img src={Images.arrowwhite} className="checkout-btn-img" />
        <span className="checkout-btn-span">Checkout!</span>
      </button>
    </div>
  );
}

export default CartComponent;

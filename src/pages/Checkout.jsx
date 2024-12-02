import React, { useEffect, useState } from "react";
import { Images } from "../asests";
import PopularCard from "../components/PopularCard";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CartItems, restaurants, userData } from "../recoil/recoil";
import { getCartItemwithDetails } from "../components/CartComponent";
import toast from "react-hot-toast";
import Payment from "./Payment";

function Checkout() {
  const cartItems = useRecoilValue(CartItems);
  const token = localStorage.getItem("token");
  const [currentPage, setCurrentPage] = useState("checkout");
  const Restraunts = useRecoilValue(restaurants);
  const UserData = useRecoilValue(userData);
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const SimilarRestraunts = [
    {
      _id: 1,
      img: Images.Popular1,
      type: "McDonald’s London ",
    },
    {
      _id: 2,
      img: Images.Popular2,
      type: "Papa Johns",
    },
    {
      _id: 3,
      img: Images.Popular3,
      type: "KFC West London",
    },
    {
      _id: 4,
      img: Images.Popular4,
      type: "Texas Chicken",
    },
    {
      _id: 5,
      img: Images.Popular5,
      type: "Burger King",
    },
    {
      _id: 6,
      img: Images.Popular6,
      type: "Shaurma 1",
    },
  ];

  useEffect(() => {
    if (cartItems) {
      const data = getCartItemwithDetails(cartItems, Restraunts);
      if (!data.length) {
        navigate("/restaurants");
        toast.error("No Items in your cart");
      }
      setOrderItems(data);
      let total = 0;
      data.forEach((e) => (total += e.quantity * Number(e.price)));
      setSubTotal(total);
    } else {
      if (UserData._id) {
        const data = getCartItemwithDetails(UserData.cart, Restraunts);
        if (!data.length) {
          navigate("/restaurants");
          toast.error("No Items in your cart");
        }
        setOrderItems(data);
        let total = 0;
        data.forEach((e) => (total += e.quantity * Number(e.price)));
        setSubTotal(total);
      } else {
        const cartItems = localStorage.getItem("cart");
        if (cartItems && JSON.parse(cartItems)) {
          const cart = JSON.parse(cartItems);
          const data = getCartItemwithDetails(cart, Restraunts);
          if (!data.length) {
            navigate("/restaurants");
            toast.error("No Items in your cart");
          }
          setOrderItems(data);
          let total = 0;
          data.forEach((e) => (total += e.quantity * Number(e.price)));
          setSubTotal(total);
        }
      }
    }
  }, [UserData]);

  return currentPage === "checkout" ? (
    <div className="checkout-outer-div">
      <div className="checkout-inner-div">
        <div className="title-checkout">
          <img
            src={Images.leftarrow}
            className="left-arrow-order-details"
            onClick={() => navigate("/restaurants/674d7208a54b5e7e77c0c157?cart=true")}
          />
          <span>Your Order Details</span>
        </div>
        <div className="checkout-upper-div">
          <div className="order-items-div">
            <div className="order-items-inner">
              {orderItems.map((e, index) => (
                <div
                  key={e._id}
                  className="order-details-component"
                  style={{
                    borderTop: index == 0 ? "none" : "1px solid #202938",
                  }}
                >
                  <div className="checkout-order-imgdescdiv">
                    <img src={e.image} className="order-img-checkout" />
                    <div className="checkout-order-desc">
                      <span className="order-item-name">{e.name}</span>
                      <span className="order-item-quantity">
                        {e.quantity}x item
                      </span>
                    </div>
                  </div>
                  <span className="order-item-price">
                    ₹{e.price * e.quantity}
                  </span>
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
                    {UserData && UserData._id
                      ? UserData.address.length > 22
                        ? `${UserData.address.slice(0, 22)}...`
                        : UserData.address
                      : "Kawungcarang road no 28..."}
                  </span>
                </div>
              </div>
              <img src={Images.arrow} className="checkout-right-arrow" />
            </div>
            <div className="checkout-total-prices">
              <div className="items-price-span">
                <span>Items</span>
                <span className="item-price-bold">₹{subTotal}</span>
              </div>
              <div className="items-price-span">
                <span>Sales Tax</span>
                <span className="item-price-bold">₹10</span>
              </div>
              <div className="subtotal-price-span">
                <span className="sub-total-item">
                  Subtotal ({orderItems.length} items)
                </span>
                <span className="sub-total-price">₹{subTotal + 10}</span>
              </div>
            </div>
            <button
              onClick={() =>
                token
                  ? setCurrentPage("payment")
                  : (toast.error("Login to continue"), navigate("/login"))
              }
              className="choose-payment-btn"
            >
              Choose Payment Method
            </button>
          </div>
        </div>
        <div className="Popular-section">
          <span className="Popular-tagline">Similar Restaurants</span>
          <div className="Popular-cards-div">
            {SimilarRestraunts.map((e) => (
              <PopularCard img={e.img} type={e.type} key={e._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Payment
      orderItems={orderItems}
      subTotal={subTotal + 10}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default Checkout;

import React, { useEffect, useState } from "react";
import "../styles/CartComponent.css";
import { Images } from "../asests";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartItems, restaurants, sharedCart, userData } from "../recoil/recoil";
import { DELETE_FROM_CART } from "../api";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from './Loader'

export const getCartItemwithDetails = (cartItems, restaurantData) => {
  const cartItemMap = new Map(cartItems.map((e) => [e.foodItemId, e.quantity]));
  const cartItemsNew = [];

  restaurantData.forEach((restraunts) => {
    restraunts.categories.forEach((category) => {
      category.foodItems.forEach((foodItem) => {
        if (cartItemMap.has(foodItem._id)) {
          cartItemsNew.push({
            ...foodItem,
            quantity: cartItemMap.get(foodItem._id),
          });
        }
      });
    });
  });

  return cartItemsNew;
};

function CartComponent({ cartItems, ReloadLocalItems, shared }) {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);
  const [detailedCart, setDetailedCart] = useState(cartItems);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(3);
  const [deliveryFees, setDeliveryFees] = useState(3);
  const [loading, setLoading] = useState(false);
  const Restraunts = useRecoilValue(restaurants);
  const SharedCart = useRecoilValue(sharedCart);
  const [cartState, setCartState] = useRecoilState(CartItems);

  useEffect(() => {
    if (cartItems) {
      const data = getCartItemwithDetails(cartItems, Restraunts);
      setDetailedCart(data);
      let total = 0;
      data.forEach((e) => (total += e.quantity * Number(e.price)));
      setSubTotal(total);
    }
  }, [cartItems]);

  const RemoveFromCart = async (id) => {
    if (SharedCart) {
      const cart = cartState;
      const existingItemIndex = cart.findIndex(
        (item) => item.foodItemId === id
      );

      let newCart = [];

      if (existingItemIndex !== -1) {
        if (cart[existingItemIndex].quantity > 1) {
          newCart = cart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          newCart = cart.filter((e) => e.foodItemId !== id);
        }
      }

      setCartState(newCart);
    } else {
      const token = localStorage.getItem("token");

      if (!token) {
        const OldCart = localStorage.getItem("cart");
        let newCart = [];
        if (OldCart && JSON.parse(OldCart)) {
          const cart = JSON.parse(OldCart);

          const itemIndex = cart.findIndex((item) => item.foodItemId === id);

          if (itemIndex !== -1) {
            if (cart[itemIndex].quantity > 1) {
              cart[itemIndex].quantity -= 1;
              newCart = [...cart];
            } else {
              newCart = cart.filter((e) => e.foodItemId !== id);
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            toast.success("Item removed from cart successfully!");
            navigate(
              `?cart=true&cartItems=${encodeURIComponent(
                JSON.stringify(newCart.map((item) => item._id))
              )}`
            );
            ReloadLocalItems();
          } else {
            toast.error("Item not found in your cart");
          }
        } else {
          toast.error("No items in your cart");
        }
      } else {
        try {
          setLoading(true);
          const response = await axios.put(
            DELETE_FROM_CART,
            { foodItemId: id, quantity: 1 },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (response.status === 200) {
            const updatedCart = response.data.cart;
            setUserData((prev) => ({
              ...prev,
              cart: updatedCart,
            }));

            toast.success("Item removed from cart successfully!");
            navigate(
              `?cart=true&cartItems=${encodeURIComponent(
                JSON.stringify(updatedCart.map((item) => item._id))
              )}`
            );
          } else {
            throw new Error("Failed to add item to cart.");
          }
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Something went wrong. Try again!"
          );
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <div className="cart-component-main">
      <div className="card-head">
        <img src={Images.basket} className="basket-img" />
        <span className="basket-head">{shared ? "Shared" : "My"} Basket</span>
      </div>
      <div className="cart-items-div">
        {detailedCart.map((e, index) => (
          <div className="cart-item-map" key={index}>
            <span className="cart-item-quantity">{e.quantity}x</span>
            <div className="cart-item-details">
              <span className="cart-item-price">{e.price}₹</span>
              <span className="cart-item-name">{e.name}</span>
              <span className="cart-item-desc">{e.desc}</span>
            </div>
            <img
              onClick={() => (loading ? undefined : RemoveFromCart(e._id))}
              src={Images.deletes}
              className="cart-item-delete"
            />
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
      <button
        className="checkoutBtn"
        onClick={() =>
          subTotal > 20
            ? navigate("/checkout")
            : toast.error("Total should be greater than 20")
        }
        style={{
          backgroundColor: subTotal < 20 ? "#FFB1B1" : "",
        }}
      >
        <img src={Images.arrowwhite} className="checkout-btn-img" />
        <span className="checkout-btn-span">Checkout!</span>
      </button>
      {loading && <Loader text={"Deleting Item from Cart"}/>}
    </div>
  );
}

export default CartComponent;

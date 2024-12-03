import React, { useState } from "react";
import "../styles/ProductCard.css";
import { Images } from "../asests";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartItems, restaurants, sharedCart, userData } from "../recoil/recoil";
import { ADD_TO_CART } from "../api";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ProductsCard({ _id: id, title, desc, price, img, ReloadLocalItems }) {
  const [loading, setLoading] = useState(false);
  const SharedCart = useRecoilValue(sharedCart);
  const [cartState, setCartState] = useRecoilState(CartItems);
  const [UserData, setUserData] = useRecoilState(userData);
  const navigate = useNavigate();

  const addItemToCart = async () => {
    if (SharedCart) {
      const cart = cartState;
      const existingItemIndex = cart.findIndex(
        (item) => item.foodItemId === id
      );

      let newCart = [];

      if (existingItemIndex !== -1) {
        newCart = cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...cart, { _id: id, foodItemId: id, quantity: 1 }];
      }

      setCartState(newCart);
    } else {
      const token = localStorage.getItem("token");

      if (!token) {
        const OldCart = localStorage.getItem("cart");
        let newCart = [];
        if (OldCart && JSON.parse(OldCart)) {
          const cart = JSON.parse(OldCart);
          const existingItemIndex = cart.findIndex(
            (item) => item.foodItemId === id
          );

          if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
            newCart = [...cart];
          } else {
            newCart = [...cart, { _id: id, foodItemId: id, quantity: 1 }];
          }
          localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
          newCart = [{ _id: id, foodItemId: id, quantity: 1 }];
          localStorage.setItem("cart", JSON.stringify(newCart));
        }

        toast.success("Item added to cart successfully!");
        navigate(
          `?cart=true&cartItems=${encodeURIComponent(
            JSON.stringify(newCart.map((item) => item._id))
          )}`
        );
        ReloadLocalItems();
      } else {
        try {
          setLoading(true);
          const response = await axios.put(
            ADD_TO_CART,
            { foodItemId: id, quantity: 1 },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (response.status === 200) {
            const updatedCart = response.data.cart;
            setUserData((prev) => ({
              ...prev,
              cart: updatedCart,
            }));

            toast.success("Item added to cart successfully!");
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
    <div className="product-card-comp">
      <div className="product-card-details">
        <span className="product-card-title">{title}</span>
        <span className="product-card-desc">{desc}</span>
        <span className="product-card-price">₹ {price}</span>
      </div>
      <div className="product-card-img">
        <img src={img} alt="product" className="product-comp-image" />
        <div
          className="right-banner-product"
          onClick={loading ? undefined : addItemToCart}
        >
          <img src={Images.add} alt="Add to cart" className="add-btn" />
        </div>
      </div>
      {loading && <Loader text={"Adding Item to  Cart"}/>}
    </div>
  );
}

export default ProductsCard;

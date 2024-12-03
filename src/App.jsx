import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { restaurants, userData } from "./recoil/recoil";
import axios from "axios";
import { ADD_TO_CART, GET_MENU, GET_USER_API } from "./api";
import { useRecoilState } from "recoil";
import Loader from "./components/Loader";

function App() {
  const [restaurantsData, setRestrauntsData] = useRecoilState(restaurants);
  const [UserData, setUserData] = useRecoilState(userData);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!restaurantsData || !restaurantsData.length) {
      setLoading(true);
      axios
        .get(GET_MENU)
        .then(({ data }) => setRestrauntsData(data.restaurants))
        .catch((err) => {
          console.log(`Error Getting menu`, err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (!UserData._id && token) {
      setLoading(true);
      axios
        .get(GET_USER_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          const OldCart = localStorage.getItem("cart");
          if (OldCart && JSON.parse(OldCart)) {
            const cart = JSON.parse(OldCart);
            const newCart = [...cart, ...data.data.cart];
            setUserData({
              ...data.data,
              cart: newCart,
            });
            cart.map((e) => {
              axios.put(
                ADD_TO_CART,
                { foodItemId: e.foodItemId, quantity: 1 },
                { headers: { Authorization: `Bearer ${token}` } }
              );
            });
            localStorage.removeItem("cart");
          } else {
            setUserData(data.data);
          }
        })
        .catch((err) => {
          console.log(`Error Getting User Data`, err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/restaurants"
          element={<Navigate to="/restaurants/674d7208a54b5e7e77c0c157" />}
        />
        <Route path="/restaurants/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {(window.innerWidth >= 900 ||
        (window.innerWidth < 900 &&
          location.pathname !== "/checkout" &&
          location.pathname !== "/profile")) && <Footer />}

      {loading ? <Loader text={"Loading Website Content...."} /> : undefined}
    </>
  );
}

export default App;

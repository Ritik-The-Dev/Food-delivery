import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Images } from "../asests";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userData } from "../recoil/recoil";
import toast from "react-hot-toast";

function Navbar() {
  const UserData = useRecoilValue(userData);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTabName, setActiveTabName] = useState("Home");

  const NavItems = [
    { _id: 1, name: "Home", path: "/" },
    { _id: 2, name: "Browse Menu", path: "#" },
    { _id: 3, name: "Special Offers", path: "#" },
    { _id: 4, name: "Restaurants", path: "/restaurants" },
    { _id: 5, name: "Track Order", path: "#" },
  ];

  useEffect(() => {
    const activeItem = NavItems.find((item) => item.path === location.pathname);
    if (activeItem) {
      setActiveTabName(activeItem.name);
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-div">
        <div className="upper-nav">
          <div className="nav-tag">
            <span className="star">🌟</span>
            <div>
              <span className="discount-tagline">
                Get 5% Off your first order,
              </span>
              <span className="promo-code"> Promo: ORDER5</span>
            </div>
          </div>
          <div className="nav-location">
            <img className="address-image" src={Images.Location} alt="📍" />
            <span className="address-name">
              Regent Street, <span className="address-a4">A4,</span> A4201,
              London
            </span>
            <span className="change-address">Change Location</span>
          </div>
          <div className="nav-cart">
            <div
              onClick={() => {
                if (location.pathname.startsWith("/restaurants")) {
                  if (location.search.includes("cart=true")) {
                    navigate(location.pathname);
                  } else {
                    navigate(`${location.pathname}?cart=true`);
                  }
                } else {
                  navigate("/restaurants/674d7208a54b5e7e77c0c127?cart=true");
                }
              }}
              className="cart-block-I"
            >
              <img className="cart-img" src={Images.Cart} alt="🛒" />
              <span className="cart-text">My Cart</span>
            </div>
            <div className="cart-block-II"></div>
            <div className="cart-block-III">
              <img
                src={Images.RightArrow}
                alt="➡️"
                className="nav-cart-arrow"
              />
            </div>
          </div>
        </div>
        <div className="down-nav">
          <div className="Logo-div">
            <img
              src={Images.Logo}
              alt="OrderUk"
              className="logo-img"
              onClick={() => navigate(`/`)}
            />
          </div>
          <div className="nav-items">
            {NavItems.map((item) => (
              <span
                className={`nav-item-name ${
                  activeTabName === item.name ? "nav-item-active" : ""
                }`}
                key={item._id}
                onClick={() => {
                  navigate(`${item.path}`);
                }}
              >
                {item.name}
              </span>
            ))}
            <button
              className="auth-button"
              onClick={() =>
                UserData && UserData.username
                  ? navigate("/profile")
                  : navigate("/login")
              }
            >
              <img className="user-img" src={Images.User} alt="👤" />
              <span className="auth-text">
                {UserData && UserData.username
                  ? UserData.username
                  : "Login/Signup"}
              </span>
            </button>
          </div>
          <div className="menu-icon">
            <img src={Images.navbar} className="menu-icon-hamburger" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

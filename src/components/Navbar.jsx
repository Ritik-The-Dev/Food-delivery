import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Images } from "../asests";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTabName, setActiveTabName] = useState("Home");

  const NavItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Browse Menu", path: "#" },
    { id: 3, name: "Special Offers", path: "#" },
    { id: 4, name: "Restaurants", path: "/restaurants" },
    { id: 5, name: "Track Order", path: "#" },
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
              onClick={() => navigate("/restaurants?cart=true")}
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
                key={item.id}
                onClick={() => {
                  navigate(`${item.path}`);
                }}
              >
                {item.name}
              </span>
            ))}
            <button className="auth-button" onClick={()=>navigate('/login')}>
              <img className="user-img" src={Images.User} alt="👤" />
              <span className="auth-text">Login/Signup</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

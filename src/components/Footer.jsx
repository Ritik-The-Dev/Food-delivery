import React from "react";
import { Images } from "../asests";
import "../styles/Footer.css";

function Footer() {
  const SocialIcons = [
    { _id: 1, img: Images.Facebook, name: "Facebook" },
    { _id: 2, img: Images.Instagram, name: "Instagram" },
    { _id: 3, img: Images.Tiktok, name: "Tiktok" },
    { _id: 4, img: Images.Snapchat, name: "Snapchat" },
  ];

  const LegalPages = [
    { name: "Terms and conditions", url: "/terms-and-conditions" },
    { name: "Privacy", url: "/privacy" },
    { name: "Cookies", url: "/cookies" },
    { name: "Modern Slavery Statement", url: "/modern-slavery-statement" },
  ];

  const ImportantLinks = [
    { name: "Get help", url: "/get-help" },
    { name: "Add your restaurant", url: "/add-your-restaurant" },
    { name: "Sign up to deliver", url: "/signup" },
    { name: "Create a business account", url: "/create-business-account" },
  ];

  const FooterLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms", url: "/terms" },
    { name: "Pricing", url: "/pricing" },
    {
      name: "Do not sell or share my personal information",
      url: "/personal-information-rights",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-upper-div">
          <div className="footer-upper-left">
            <img src={Images.Logo} alt="Order" className="footer-logo" />
            <div className="store-logos">
              <div className="AppStore-div">
                <img
                  src={Images.Appstore}
                  alt="App Store"
                  className="appstore-logo-img"
                />
              </div>
              <div className="PlayStore-div">
                <img
                  src={Images.PlayStore}
                  alt="Play Store"
                  className="playstore-logo-img"
                />
              </div>
            </div>
            <span className="footer-upperleft-details">
              Company # 490039-445, Registered with House of companies.
            </span>
          </div>
          <div className="footer-upper-right">
            <div className="footer-right-blockI">
              <span className="footer-mail-text">
                Get Exclusive Deals in your Inbox
              </span>
              <div>
                <div className="footer-mail-div">
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="footer-mail-input"
                  />
                  <button className="footer-mail-btn">Subscribe</button>
                </div>
                <span className="footer-mail-info">
                  we wont spam, read our{" "}
                  <span className="email-policy">email policy</span>
                </span>
              </div>
              <div className="footer-social-div">
                {SocialIcons.map((e, index) => (
                  <img
                    key={index}
                    src={e.img}
                    alt={e.name}
                    className="footer-social-icons"
                  />
                ))}
              </div>
            </div>
            <div className="footer-right-blocks">
              <span className="right-head">Legal Pages</span>
              {LegalPages.map((e,index) => (
                <span key={index} className="right-pages-name">{e.name}</span>
              ))}
            </div>
            <div className="footer-right-blocks">
              <span className="right-head">Important Links</span>
              {ImportantLinks.map((e,index) => (
                <span key={index} className="right-pages-name">{e.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower-div">
        <div className="footer-lower-inner-div">
          <span className="copyright-text">
            Order.uk Copyright 2024, All Rights Reserved.
          </span>
          <div className="footer-lower-right-div">
            {FooterLinks.map((e, index) => (
              <span key={index} className="footer-lower-links">
                {e.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { Images } from "../asests";
import OrderModal from "../components/OrderModal";
import "../styles/Home.css";
import DealsCard from "../components/DealsCard";
import CategoryCard from "../components/CategoryCard";
import PopularCard from "../components/PopularCard";
import PartnerCard from "../components/PartnerCard";

function Home() {
  const [currentDeal, setCurrentDeal] = useState("Pizza & Fast food");

  const siteSpecs = [
    { id: 1, name: "Registered Riders", number: "546+" },
    { id: 2, name: "Orders Delivered", number: "789,900+" },
    { id: 3, name: "Restaurants Partnered", number: "690+" },
    { id: 4, name: "Food items", number: "17,457+" },
  ];

  const dealsSection = [
    { id: 1, name: "Vegan" },
    { id: 2, name: "Shushi" },
    { id: 3, name: "Pizza & Fast food" },
    { id: 4, name: "Others" },
  ];

  const exclusiveDeals = [
    {
      id: 1,
      img: Images.Deal1,
      discount: "-40%",
      type: "Restaurant",
      name: "Chef Burgers London",
    },
    {
      id: 2,
      img: Images.Deal2,
      discount: "-20%",
      type: "Restaurant",
      name: "Grand Ai Cafe London",
    },
    {
      id: 3,
      img: Images.Deal1,
      discount: "-17%",
      type: "Restaurant",
      name: "Butterbrot Caf’e London",
    },
  ];

  const categories = [
    {
      id: 1,
      img: Images.Category1,
      type: "Burgers & Fast food",
      quantity: "21 Restaurants",
    },
    {
      id: 2,
      img: Images.Category2,
      type: "Salads",
      quantity: "32 Restaurants",
    },
    {
      id: 3,
      img: Images.Category3,
      type: "Pasta & Casuals",
      quantity: "4 Restaurants",
    },
    {
      id: 4,
      img: Images.Category4,
      type: "Pizza",
      quantity: "32 Restaurants",
    },
    {
      id: 5,
      img: Images.Category5,
      type: "Breakfast",
      quantity: "4 Restaurants",
    },
    {
      id: 6,
      img: Images.Category6,
      type: "Soups",
      quantity: "32 Restaurants",
    },
  ];

  const Popular = [
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

  const Partner = [
    {
      id: 1,
      img: Images.partner1,
      tagline: "Earn more with lower fees",
      type: "Signup as a business",
      name: "Partner with us",
    },
    {
      id: 2,
      img: Images.partner2,
      tagline: "Avail exclusive perks",
      type: "Signup as a rider",
      name: "Ride with us",
    },
  ];

  const knowMoreTabs = [
    "Frequent Questions",
    "Who we are?",
    "Partner Program",
    "Help & Support",
  ];

  const knowMoreQuestions = [
    "How does Order.UK work?",
    "What payment methods are accepted?",
    "Can I track my order in real-time?",
    "Are there any special discounts or promotions available?",
    "Is Order.UK available in my area?",
  ];

  const knowMoreAnswers = [
    {
      id: 1,
      tagline: "Place an Order!",
      img: Images.answer1,
      desc: "Place order through our website or Mobile app",
    },
    {
      id: 2,
      tagline: "Track Progress",
      img: Images.answer2,
      desc: "Your can track your order status with delivery time",
    },
    {
      id: 3,
      tagline: "Get your Order!",
      img: Images.answer3,
      desc: "Receive your order at a lighting fast speed!",
    },
  ];

  return (
    <div className="home-main-div">
      <div className="home-width-manager">
        {/* Banner Section */}
        <div className="home-banner-div">
          <div className="home-banner-left">
            <span className="banner-tagline">
              Order Restaurant food, takeaway and groceries.
            </span>
            <span className="banner-headline">Feast Your Senses,</span>
            <span className="banner-headline-color">Fast and Fresh </span>
            <div>
              <label className="postcode-text" htmlFor="PostCode">
                Enter a postcode to see what we deliver
              </label>
              <div className="postcode-div">
                <input
                  type="text"
                  name="postcode-text"
                  placeholder="e.g. EC4R 3TE"
                  className="postcode-input"
                />
                <button className="pincode-search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="home-banner-center">
            <img
              src={Images.HomeCenter}
              alt="Center Image"
              className="Home-center-image"
            />
          </div>
          <div className="home-banner-right">
            <div className="banner-right-images">
              <img src={Images.Banner2} alt="Banner" className="Banner2" />
              <div className="order-modals">
                <div className="order-modal-div order-modal-1">
                  <span className="order-numbers">1</span>
                  <OrderModal
                    tagline={"We’ve Received your order!"}
                    desc={"Awaiting Restaurant acceptance "}
                  />
                </div>
                <div className="order-modal-div order-modal-2">
                  <span className="order-numbers order-number-2">2</span>
                  <OrderModal
                    tagline={"Order Accepted!  ✅"}
                    desc={"Your order will be delivered shortly"}
                  />
                </div>
                <div className="order-modal-div order-modal-3">
                  <span className="order-numbers order-number-3">3</span>
                  <OrderModal
                    tagline={"Your rider's nearby 🎉"}
                    desc={"They're almost there -get ready!"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Deals Section */}
        <div className="deals-section">
          <div className="deals-head">
            <span className="deal-tagline">
              Up to -40% 🎊 Order.uk exclusive deals
            </span>
            <div className="deals-map">
              {dealsSection.map((e) => (
                <span
                  onClick={() => setCurrentDeal(e.name)}
                  className={`deals-name ${
                    currentDeal === e.name ? "deals-name-active" : ""
                  }`}
                  key={e.id}
                >
                  {e.name}
                </span>
              ))}
            </div>
          </div>
          <div className="deals-cards">
            {exclusiveDeals.map((e) => (
              <DealsCard
                img={e.img}
                discount={e.discount}
                key={e.id}
                type={e.type}
                name={e.name}
              />
            ))}
          </div>
        </div>
        {/* Categoies Section */}
        <div className="category-section">
          <span className="category-tagline">
            Order.uk Popular Categories 🤩
          </span>
          <div className="categories-cards-div">
            {categories.map((e) => (
              <CategoryCard
                img={e.img}
                quantity={e.quantity}
                type={e.type}
                key={e.id}
              />
            ))}
          </div>
        </div>
        {/* Popular Section */}
        <div className="Popular-section">
          <span className="Popular-tagline">Popular Restaurants</span>
          <div className="Popular-cards-div">
            {Popular.map((e) => (
              <PopularCard img={e.img} type={e.type} key={e.id} />
            ))}
          </div>
        </div>
        {/* Download App Section */}
        <div className="download-section">
          <div className="download-section-inner">
            <div className="download-background">
              <img
                src={Images.downloadBg}
                alt="Background"
                className="downloadBg0"
              />
              <img
                src={Images.download}
                alt="Background"
                className="downloadBg1"
              />
            </div>
            <div className="download-section-right">
              <div className="download-section-right-text">
                <img
                  className="download-logo-center"
                  src={Images.Logo}
                  alt="Logo"
                />
                <span className="download-logo-left">ing is more</span>
              </div>
              <div className="personalized-text-div">
                <span className="personalised-text">
                  <span className="colored-text">Personalised </span>‎ & Instant
                </span>
              </div>
              <span className="download-text">
                Download the Order.uk app for faster ordering
              </span>
              <div className="store-logos">
                <div className="AppStore-div AppStore-divs">
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
            </div>
          </div>
        </div>
        {/* Partner Section */}
        <div className="partner-section">
          {Partner.map((e) => (
            <PartnerCard
              img={e.img}
              name={e.name}
              tagline={e.tagline}
              type={e.type}
              key={e.id}
            />
          ))}
        </div>
        {/* Know More Section */}
        <div className="know-more-section">
          <div className="know-more-inner-section">
            <div className="know-more-tagline">
              <span className="know-more-span">Know more about us!</span>
              <div className="know-more-tabs">
                {knowMoreTabs.map((e, index) => (
                  <span
                    key={index}
                    className={`know-more-map  ${
                      index === 0 ? "know-more-active" : ""
                    }`}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="know-more-main">
              <div className="know-more-questions">
                {knowMoreQuestions.map((e, index) => (
                  <span
                    className={`know-more-spans ${
                      index === 0 ? "know-more-spans-active" : ""
                    }`}
                    key={index}
                  >
                    {e}
                  </span>
                ))}
              </div>
              <div className="know-more-answers-div">
                <div className="know-more-answers">
                  {knowMoreAnswers.map((e) => (
                    <div key={e.id} className="know-answer-div">
                      <span className="know-answer-tagline">{e.tagline}</span>
                      <img
                        src={e.img}
                        alt="Answer-img"
                        className="know-answer-img"
                      />
                      <span className="know-answer-desc">{e.desc}</span>
                    </div>
                  ))}
                </div>
                <span className="answer-div-main">
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Total Orders Section */}
        <div className="total-orders-section">
          {siteSpecs.map((e,id) => (
            <div key={e.id} className="site-specs"
            style={{
              borderRight: id !== 3 ? '1px solid white' : 'none'
            }}>
              <span className="site-specs-number">{e.number}</span>
              <span className="site-specs-names">{e.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

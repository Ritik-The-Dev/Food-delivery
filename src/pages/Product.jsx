import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Images } from "../asests";
import DealsCard from "../components/DealsCard";
import PopularCard from "../components/PopularCard";
import "../styles/Product.css";
import ProductsCard from "../components/ProductsCard";
import ReviewCard from "../components/ReviewCard";
import CartComponent from "../components/CartComponent";

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const newCart = [...cartItems, item];
    setCartItems(newCart);
    const cartIds = newCart.map((item) => item.id);
    navigate(
      `/restaurants?cart=true&cartItems=${encodeURIComponent(
        JSON.stringify(cartIds)
      )}`
    );
  };

  const banners = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];
  const exclusiveDeals = [
    {
      id: 1,
      img: Images.discount1,
      discount: "-20%",
      type: "McDonald’s East London",
      name: "First Order Discount",
    },
    {
      id: 2,
      img: Images.discount2,
      discount: "-20%",
      type: "McDonald’s East London",
      name: "Vegan Discount",
    },
    {
      id: 3,
      img: Images.discount3,
      discount: "-100%",
      type: "McDonald’s East London",
      name: "Free ice Cream Offer",
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
  const Products = [
    {
      id: 1,
      title: "Royal Cheese Burger with extra Fries",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 120",
      img: Images.product1,
    },
    {
      id: 2,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 120",
      img: Images.product1,
    },
    {
      id: 3,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 120",
      img: Images.product1,
    },
    {
      id: 4,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 120",
      img: Images.product1,
    },
  ];
  const Products1 = [
    {
      id: 1,
      title: "Royal Cheese Burger with extra Fries",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 70",
      img: Images.product2,
    },
    {
      id: 2,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 70",
      img: Images.product2,
    },
    {
      id: 3,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 70",
      img: Images.product2,
    },
    {
      id: 4,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 70",
      img: Images.product2,
    },
  ];
  const Products2 = [
    {
      id: 1,
      title: "Royal Cheese Burger with extra Fries",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 40",
      img: Images.product3,
    },
    {
      id: 2,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 40",
      img: Images.product3,
    },
    {
      id: 3,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 40",
      img: Images.product3,
    },
    {
      id: 4,
      title: "The classics for 3",
      desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
      price: "₹ 40",
      img: Images.product3,
    },
  ];
  const deliveryInfo = [
    { id: 1, day: "Monday: ", timing: " 12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
    { id: 2, day: "Tuesday: ", timing: "8:00 AM–3:00 AM" },
    { id: 3, day: "Wednesday: ", timing: "8:00 AM–3:00 AM" },
    { id: 4, day: "Thursday: ", timing: "8:00 AM–3:00 AM" },
    { id: 5, day: "Friday: ", timing: "8:00 AM–3:00 AM" },
    { id: 6, day: "Saturday: ", timing: "8:00 AM–3:00 AM" },
    { id: 7, day: "Sunday: ", timing: "8:00 AM–12:00 AM" },
    { id: 8, day: "Estimated time until delivery:", timing: "20 min" },
  ];
  const operationalTime = [
    { id: 1, day: "Monday: ", timing: " 8:00 AM–3:00 AM, " },
    { id: 2, day: "Tuesday: ", timing: "8:00 AM–3:00 AM" },
    { id: 3, day: "Wednesday: ", timing: "8:00 AM–3:00 AM" },
    { id: 4, day: "Thursday: ", timing: "8:00 AM–3:00 AM" },
    { id: 5, day: "Friday: ", timing: "8:00 AM–3:00 AM" },
    { id: 6, day: "Saturday: ", timing: "8:00 AM–3:00 AM" },
    { id: 7, day: "Sunday: ", timing: "8:00 AM–3:00 AM" },
  ];
  const review = [
    {
      id: 1,
      img: Images.profilepic,
      name: "St Glx",
      location: "South London",
      ratings: 5,
      date: "24th September, 2023",
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      id: 2,
      img: Images.profilepic,
      name: "St Glx",
      location: "South London",
      ratings: 5,
      date: "24th September, 2023",
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      id: 3,
      img: Images.profilepic,
      name: "St Glx",
      location: "South London",
      ratings: 5,
      date: "24th September, 2023",
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cartState = queryParams.get("cart");
    const cartItemsParam = queryParams.get("cartItems");
    if (cartItemsParam) {
      try {
        const parsedCartItems = JSON.parse(decodeURIComponent(cartItemsParam));
        if (parsedCartItems.length) {
          setShowCart(true);
        } else {
          setShowCart(cartState);
        }
      } catch (error) {
        console.error("Error parsing cartItems from URL:", error);
      }
    }
    setShowCart(cartState);
  }, [location]);

  return (
    <div className="product-main-div">
      <div className="product-page-div">
        {/* Product Page Banner */}
        <div
          className="product-page-banner"
          style={{
            backgroundImage: `url(${Images.productBanner})`,
          }}
        >
          <div className="product-banner-background">
            <div className="product-banner-left-div">
              <span className="product-banner-left-title">I'm lovin' it!</span>
              <span className="product-banner-left-headline">
                McDonald’s East London
              </span>
              <div className="product-banner-left-btns">
                <button className="product-banner-left-btns1">
                  <img src={Images.minimum} className="minimum-btn" />
                  <span className="minimum-span-tag">
                    Minimum Order: 12 GBP
                  </span>
                </button>
                <button className="product-banner-left-btns1">
                  <img src={Images.delivery} className="minimum-btn" />
                  <span className="minimum-span-tag">
                    Delivery in 20-25 Minutes
                  </span>
                </button>
              </div>
            </div>
            <div className="product-banner-right-div">
              <img
                src={Images.productBanner}
                alt="Banner Img"
                className="product-banner-right-img"
              />
              <img
                src={Images.rating}
                className="product-banner-right-img0"
                alt="product-banner-right-img-1"
              />
            </div>
          </div>
        </div>
        {/* Timing Div */}
        <div className="timing-div">
          <div className="timing-div-inner">
            <img src={Images.clock} alt="clock" className="timing-img" />
            <span className="timing-span">Open until 3:00 AM</span>
          </div>
        </div>
        {/* Search Div */}
        <div className="search-div">
          <span className="search-text-label">
            All Offers from McDonald’s East London
          </span>
          <div className="search-input-div">
            <img src={Images.search} alt="Search" className="search-img" />
            <input
              type="text"
              className="search-input"
              placeholder="Search from menu..."
            />
          </div>
        </div>
        {/* Marquee Banner */}
        <div className="banner-marquee">
          <div className="banner-inner-marquee">
            {banners.map((e, index) => (
              <span
                className={`banner-marquee-span ${
                  index === 0 ? "banner-marquee-span-active" : ""
                }`}
                key={index}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
        {/* Cart Management */}
        <div className="card-product-manager">
          <div className="products-inner-manager">
            {/* Discount Section */}
            <div
              className="discount-sections"
              style={{
                gridTemplateColumns: showCart
                  ? `repeat(2, 1fr)`
                  : `repeat(3, 1fr)`,
              }}
            >
              {exclusiveDeals.map((e) => (
                <DealsCard
                  name={e.name}
                  type={e.type}
                  discount={e.discount}
                  key={e.id}
                  img={e.img}
                  productPage={true}
                />
              ))}
            </div>
            {/* Products Section */}
            <div className="product-section">
              <span className="product-title">Burgers</span>
              <div
                className="products-grid"
                style={{
                  gridTemplateColumns: showCart
                    ? `repeat(2, 1fr)`
                    : `repeat(3, 1fr)`,
                }}
              >
                {Products.map((e) => (
                  <ProductsCard
                    key={e.id}
                    title={e.title}
                    desc={e.desc}
                    price={e.price}
                    img={e.img}
                  />
                ))}
              </div>
            </div>
            <div className="product-section">
              <span className="product-colored-title">Fries</span>
              <div
                className="products-grid"
                style={{
                  gridTemplateColumns: showCart
                    ? `repeat(2, 1fr)`
                    : `repeat(3, 1fr)`,
                }}
              >
                {Products1.map((e) => (
                  <ProductsCard
                    key={e.id}
                    title={e.title}
                    desc={e.desc}
                    price={e.price}
                    img={e.img}
                  />
                ))}
              </div>
            </div>
            <div className="product-section">
              <span className="product-colored-title">Cold Drinks</span>
              <div
                className="products-grid"
                style={{
                  gridTemplateColumns: showCart
                    ? `repeat(2, 1fr)`
                    : `repeat(3, 1fr)`,
                }}
              >
                {Products2.map((e) => (
                  <ProductsCard
                    key={e.id}
                    title={e.title}
                    desc={e.desc}
                    price={e.price}
                    img={e.img}
                  />
                ))}
              </div>
            </div>
          </div>
          {showCart ? <CartComponent /> : undefined}
        </div>
        {/* Timing Div */}
        <div className="timing-div-info">
          <div className="delivery-info">
            <div className="headline-div">
              <img src={Images.Location1} alt="Pin" className="location-pin" />
              <span className="delivery-title"> Delivery information</span>
            </div>
            <div className="delivery-timings-div">
              {deliveryInfo.map((e) => (
                <span className="delivery-timings" key={e.id}>
                  <span className="delivery-day">{e.day}</span>
                  {e.timing}
                </span>
              ))}
            </div>
          </div>
          <div className="contact-info">
            <div className="headline-div">
              {" "}
              <img src={Images.contact} alt="Pin" className="location-pin" />
              <span className="delivery-title"> Contact information</span>
            </div>
            <div className="contact-timings-div">
              <span className="contact-timing-span">
                If you have allergies or other dietary restrictions, please
                contact the restaurant. The restaurant will provide
                food-specific information upon request.
              </span>
              <span className="contact-title">Phone number</span>
              <span className="contact-number">+934443-43</span>
              <span className="website-title">Website</span>
              <span className="website-link">http://mcdonalds.uk/</span>
            </div>
          </div>
          <div className="operational-time">
            <div className="headline-div">
              <img src={Images.handwatch} alt="Pin" className="location-pin" />
              <span className="Operational-title">Operational Times</span>
            </div>
            <div className="operational-timings-div">
              {operationalTime.map((e) => (
                <span className="delivery-timings" key={e.id}>
                  <span className="delivery-day">{e.day}</span>
                  {e.timing}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Location Div */}
        <div className="location-div-comp">
          <div
            className="location-background"
            style={{
              backgroundImage: `url(${Images.map})`,
            }}
          >
            <div className="location-inner-div">
              <div className="location-inner-left">
                <div className="location-inner-left-inner">
                  <span className="location-inner-outlet">McDonald’s</span>
                  <span className="location-inner-name">South London</span>
                  <span className="location-inner-adress">
                    Tooley St, London Bridge, London SE1 2TF, United Kingdom
                  </span>
                  <span className="location-inner-normal">Phone number</span>
                  <span className="location-inner-colored">+934443-43</span>
                  <span className="location-inner-normal">Website</span>
                  <span className="location-inner-colored">
                    http://mcdonalds.uk/
                  </span>
                </div>
              </div>
              <div className="location-inner-right">
                <span className="location-right-oulet-div">
                  McDonald’s
                  <span className="location-right-small-span">
                    South London
                  </span>
                </span>
                <div className="location-pin-div">
                  <img src={Images.mapPin} className="map-pin-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="product-review-section">
          <div className="product-review-section-inner">
            <div className="review-section-name">
              <span className="review-section-span-name">Customer Reviews</span>
              <div className="move-reviews-btns">
                <div className="review-btn">
                  <img
                    src={Images.arrow}
                    alt="<"
                    className="left-arrow-img-rating"
                  />
                </div>
                <div className="review-btn">
                  <img
                    src={Images.arrow}
                    alt=">"
                    className="right-arrow-img-rating"
                  />
                </div>
              </div>
            </div>
            <div className="reviews-section">
              {review.map((e) => (
                <ReviewCard
                  img={e.img}
                  location={e.location}
                  name={e.name}
                  rating={e.ratings}
                  date={e.date}
                  key={e.id}
                  comment={e.comment}
                />
              ))}
            </div>
          </div>
        </div>
        <img src={Images.rating} className="rating-img-overall" />
        {/* Popular Section */}
        <div className="Popular-sections">
          <span className="Popular-tagline">Similar Restaurants</span>
          <div className="Popular-cards-div">
            {Popular.map((e) => (
              <PopularCard img={e.img} type={e.type} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

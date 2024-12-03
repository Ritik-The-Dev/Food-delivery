import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Images } from "../asests";
import DealsCard from "../components/DealsCard";
import PopularCard from "../components/PopularCard";
import "../styles/Product.css";
import ProductsCard from "../components/ProductsCard";
import ReviewCard from "../components/ReviewCard";
import CartComponent from "../components/CartComponent";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CartItems,
  restaurants,
  sharedCart,
  showModalCart,
  userData,
} from "../recoil/recoil";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

function Product() {
  const sectionRefs = useRef([]);
  const cartRef = useRef(null);
  const productsRef = useRef(null);
  const [ShowModalCart, setShowModalCart] = useRecoilState(showModalCart);
  const { id } = useParams();
  const navigate = useNavigate();
  const Restaurants = useRecoilValue(restaurants);
  const UserData = useRecoilValue(userData);
  const location = useLocation();
  const [RestaurantData, setRestrauntData] = useState({
    _id: "674d71f2509b07f0897ea65a",
    name: "McDonald’s East London",
    logo: Images.productBanner,
    categories: [
      {
        name: "Offers",
        foodItems: [],
        _id: "674d71f2509b07f0897ea65b",
      },
      {
        name: "Burgers",
        foodItems: [
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 120,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127893/product1_okuyrz.png",
            _id: "674d71f2509b07f0897ea65d",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 120,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127893/product1_okuyrz.png",
            _id: "674d71f2509b07f0897ea65e",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 120,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127893/product1_okuyrz.png",
            _id: "674d71f2509b07f0897ea65f",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 120,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127893/product1_okuyrz.png",
            _id: "674d71f2509b07f0897ea660",
          },
        ],
        _id: "674d71f2509b07f0897ea65c",
      },
      {
        name: "Fries",
        foodItems: [
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 70,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127975/product2_bq3fe1.png",
            _id: "674d71f2509b07f0897ea662",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 70,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127975/product2_bq3fe1.png",
            _id: "674d71f2509b07f0897ea663",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 70,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127975/product2_bq3fe1.png",
            _id: "674d71f2509b07f0897ea664",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 70,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127975/product2_bq3fe1.png",
            _id: "674d71f2509b07f0897ea665",
          },
        ],
        _id: "674d71f2509b07f0897ea661",
      },
      {
        name: "Snacks",
        foodItems: [],
        _id: "674d71f2509b07f0897ea666",
      },
      {
        name: "Salads",
        foodItems: [],
        _id: "674d71f2509b07f0897ea667",
      },
      {
        name: "Cold Drinks",
        foodItems: [
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 40,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127979/product3_kpxwq4.png",
            _id: "674d71f2509b07f0897ea669",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 40,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127979/product3_kpxwq4.png",
            _id: "674d71f2509b07f0897ea66a",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 40,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127979/product3_kpxwq4.png",
            _id: "674d71f2509b07f0897ea66b",
          },
          {
            name: "Royal Cheese Burger with extra Fries",
            description:
              "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
            price: 40,
            image:
              "https://res.cloudinary.com/dw4gtg42m/image/upload/v1733127979/product3_kpxwq4.png",
            _id: "674d71f2509b07f0897ea66c",
          },
        ],
        _id: "674d71f2509b07f0897ea668",
      },
      {
        name: "Happy Meal®",
        foodItems: [],
        _id: "674d71f2509b07f0897ea66d",
      },
      {
        name: "Desserts",
        foodItems: [],
        _id: "674d71f2509b07f0897ea66e",
      },
      {
        name: "Hot drinks",
        foodItems: [],
        _id: "674d71f2509b07f0897ea66f",
      },
      {
        name: "Sauces",
        foodItems: [],
        _id: "674d71f2509b07f0897ea670",
      },
      {
        name: "Orbit®",
        foodItems: [],
        _id: "674d71f2509b07f0897ea671",
      },
    ],
    address: "Shaurma 1 East London",
    phone: "9999999999",
    rating: 5,
    __v: 0,
  });
  const [CategoryWithProducts, setCategoryWithProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useRecoilState(CartItems);
  const [sharedItem, setSharedItem] = useRecoilState(sharedCart);
  const [sharedLoading, setSharedLoading] = useState(false);
  const [currentSection, setCurrenSection] = useState("Burgers");
  const [filteredItem, setFilteredItems] = useState([]);

  const exclusiveDeals = [
    {
      _id: 1,
      img: Images.discount1,
      discount: "-20%",
      type: "McDonald’s East London",
      name: "First Order Discount",
    },
    {
      _id: 2,
      img: Images.discount2,
      discount: "-20%",
      type: "McDonald’s East London",
      name: "Vegan Discount",
    },
    {
      _id: 3,
      img: Images.discount3,
      discount: "-100%",
      type: "McDonald’s East London",
      name: "Free ice Cream Offer",
    },
  ];
  const deliveryInfo = [
    { _id: 1, day: "Monday: ", timing: " 12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
    { _id: 2, day: "Tuesday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 3, day: "Wednesday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 4, day: "Thursday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 5, day: "Friday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 6, day: "Saturday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 7, day: "Sunday: ", timing: "8:00 AM–12:00 AM" },
    { _id: 8, day: "Estimated time until delivery:", timing: "20 min" },
  ];
  const operationalTime = [
    { _id: 1, day: "Monday: ", timing: " 8:00 AM–3:00 AM, " },
    { _id: 2, day: "Tuesday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 3, day: "Wednesday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 4, day: "Thursday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 5, day: "Friday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 6, day: "Saturday: ", timing: "8:00 AM–3:00 AM" },
    { _id: 7, day: "Sunday: ", timing: "8:00 AM–3:00 AM" },
  ];
  const review = [
    {
      _id: 1,
      img: Images.profilepic,
      name: "St Glx",
      location: "South London",
      ratings: 5,
      date: "24th September, 2023",
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      _id: 2,
      img: Images.profilepic,
      name: "St Glx",
      location: "South London",
      ratings: 5,
      date: "24th September, 2023",
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      _id: 3,
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
    const cartState = queryParams.get("sharelink");
    if (cartState) {
      try {
        const decodedCartState = decodeURIComponent(cartState);
        const parsedCartItems = JSON.parse(decodedCartState);
        if (Array.isArray(parsedCartItems) && parsedCartItems.length) {
          setSharedLoading(true);
          setSharedItem(true);
          const sharedCardItems = [];
          parsedCartItems.forEach((item) => {
            sharedCardItems.push({
              _id: Date.now(),
              quantity: 1,
              foodItemId: item,
            });
          });
          setCartItems(sharedCardItems);
          setTimeout(() => {
            navigate("/checkout");
            setSharedLoading(false);
          }, 2000);
          setShowCart(true);
        } else {
          console.warn("No valid cart items found.");
        }
      } catch (error) {
        setSharedLoading(false);
        console.error("Error parsing cartItems from URL:", error);
      }
    }
  }, [location, UserData]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cartState = queryParams.get("cart");
    const cartItemsParam = queryParams.get("cartItems");
    if (cartItemsParam) {
      try {
        const parsedCartItems = JSON.parse(decodeURIComponent(cartItemsParam));
        if (parsedCartItems.length) {
          setShowCart(true);
          if (cartRef.current) {
            cartRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          setShowCart(cartState);
        }
      } catch (error) {
        console.error("Error parsing cartItems from URL:", error);
      }
    }
    setShowCart(cartState);
  }, [location]);

  useEffect(() => {
    if (!sharedItem) {
      if (UserData._id) {
        setCartItems(UserData.cart);
      } else {
        const cartItems = localStorage.getItem("cart");
        if (cartItems && JSON.parse(cartItems)) {
          setCartItems(JSON.parse(cartItems));
        }
      }
    }
  }, [UserData, Restaurants]);

  useEffect(() => {
    if (id && Restaurants) {
      const getRestrauntData = Restaurants.find((e) => e._id === id);
      if (getRestrauntData && getRestrauntData._id) {
        setRestrauntData(getRestrauntData);
        const AllCategoryWithProduct = [];
        getRestrauntData.categories.forEach((e) => {
          if (e.foodItems.length) {
            AllCategoryWithProduct.push(e);
          }
        });
        setCategoryWithProducts(AllCategoryWithProduct);
        setFilteredItems(AllCategoryWithProduct);
      }
    }
  }, [id, Restaurants]);

  const ReloadLocalItems = () => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems && JSON.parse(cartItems)) {
      setCartItems(JSON.parse(cartItems));
    }
  };

  const copyShareLink = () => {
    if (cartItems.length > 0) {
      const generateShareUrl = (itemIds) => {
        const encodedItemIds = encodeURIComponent(JSON.stringify(itemIds));
        const shareUrl = `${window.location.origin}/restaurants/674d7208a54b5e7e77c0c157?sharelink=${encodedItemIds}`;
        return shareUrl;
      };
      const ShareItemsIds = cartItems.map((item) => item.foodItemId);
      const ShareUrl = generateShareUrl(ShareItemsIds);
      navigator.clipboard
        .writeText(ShareUrl)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text to clipboard: ", err);
          toast.error("Failed to copy link.");
        });
    } else {
      toast.error("No items in your cart to share.");
    }
  };

  const handleScrollToSection = (categoryName) => {
    const sectionIndex = CategoryWithProducts.findIndex(
      (category) => category.name === categoryName
    );
    if (sectionIndex !== -1 && sectionRefs.current[sectionIndex]) {
      sectionRefs.current[sectionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filterCategories = (searchText) => {
    const filteredData = CategoryWithProducts.filter((category) =>
      category.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filteredData);
  };

  const goToProduct = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (CategoryWithProducts.length && searchText) {
      filterCategories(searchText);
    }
  }, [searchText]);

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
                {RestaurantData.name}
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
                src={RestaurantData.logo}
                alt="Banner Img"
                className="product-banner-right-img"
              />
              <img
                src={Images.rating}
                className="product-banner-right-img0"
                alt="product-banner-right-img-1"
              />
            </div>
            <div className="product-banner-left-div res-banner-left-div ">
              <span className="product-banner-left-title">I'm lovin' it!</span>
              <span className="product-banner-left-headline">
                {RestaurantData.name}
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
            All Offers from {RestaurantData.name}
          </span>
          <div className="search-input-div">
            <img
              src={Images.search}
              alt="Search"
              className="search-img"
              onClick={goToProduct}
            />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  goToProduct();
                }
              }}
              type="text"
              className="search-input"
              placeholder="Search from menu..."
            />
          </div>
        </div>
        {/* Marquee Banner */}
        <div className="banner-marquee">
          <div className="banner-inner-marquee">
            {RestaurantData.categories.map((e, index) => (
              <span
                onClick={() => {
                  if (e.foodItems.length) {
                    setCurrenSection(e.name);
                    handleScrollToSection(e.name);
                  }
                }}
                className={`banner-marquee-span ${
                  currentSection === e.name ? "banner-marquee-span-active" : ""
                }`}
                key={index}
                style={{
                  opacity: !e.foodItems.length ? 0.7 : 1,
                }}
              >
                {e.name}
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
                gridTemplateColumns:
                  showCart && showCart != "false"
                    ? `repeat(2, 1fr)`
                    : `repeat(3, 1fr)`,
              }}
            >
              {exclusiveDeals.map((e) => (
                <DealsCard
                  name={e.name}
                  type={e.type}
                  discount={e.discount}
                  key={e._id}
                  img={e.img}
                  productPage={true}
                />
              ))}
            </div>
            {/* Products Section */}
            {filteredItem.map((e, index) => (
              <div
                className="product-section"
                ref={(el) => (sectionRefs.current[index] = el)}
                key={e._id}
              >
                <span
                  ref={index === 0 ? productsRef : null}
                  className={`${
                    index === 0 ? "product-title" : "product-colored-title"
                  }`}
                >
                  {e.name}
                </span>
                <div
                  className="products-grid"
                  style={{
                    gridTemplateColumns:
                      window.innerWidth > 1560
                        ? showCart && showCart != "false"
                          ? `repeat(2, 1fr)`
                          : `repeat(3, 1fr)`
                        : window.innerWidth > 900
                        ? showCart && showCart != "false"
                          ? `repeat(1, 1fr)`
                          : `repeat(2, 1fr)`
                        : window.innerWidth < 900
                        ? `repeat(1, 1fr)`
                        : "",
                  }}
                >
                  {e.foodItems.map((e) => (
                    <ProductsCard
                      ReloadLocalItems={ReloadLocalItems}
                      _id={e._id}
                      key={e._id}
                      title={e.name}
                      desc={e.description}
                      price={e.price}
                      img={e.image}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {showCart && showCart != "false" ? (
            <div className="both-comp" ref={cartRef}>
              <div className="share-cart-component">
                <div className="share-cart-left">
                  <img className="share-cart-img" src={Images.share} />
                  <span className="share-cart-text">
                    Share this cart with your friends
                  </span>
                </div>
                <div className="share-cart-right">
                  <button className="share-cart-btn" onClick={copyShareLink}>
                    Copy Link
                  </button>
                </div>
              </div>
              <CartComponent
                shared={sharedItem}
                ReloadLocalItems={ReloadLocalItems}
                cartItems={cartItems}
              />
            </div>
          ) : undefined}
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
                <span className="delivery-timings" key={e._id}>
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
                <span className="delivery-timings" key={e._id}>
                  <span className="delivery-day">{e.day}</span>
                  {e.timing}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Location Div */}
        <div className="location-div-comp upper-location-res">
          <div
            className="location-background"
            style={{
              position: "relative",
              backgroundImage: `url(${Images.map})`,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877481.1487000826!2d74.83031757812498!3d30.7841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107484bbb101a9%3A0x2177d3601c02d1d1!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1733221475570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: "0",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="location-inner-div">
              <div
                className="location-inner-left"
                style={{
                  zIndex: "10",
                }}
              >
                <div className="location-inner-left-inner">
                  <span className="location-inner-outlet">McDonald’s</span>
                  <span className="location-inner-name">South London</span>
                  <span className="location-inner-adress">
                    Tooley St, London Bridge, London SE1 2TF, United Kingdom
                  </span>
                  <span className="location-inner-normal">Phone number</span>
                  <span className="location-inner-colored">+934443-43</span>
                  <span className="location-inner-normal web-res">Website</span>
                  <span className="location-inner-colored web-res">
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
        <div className="Popular-sections-res">
          <span className="Popular-tagline">Similar Restaurants</span>
          <div className="Popular-cards-div-res">
            {Restaurants.map((e) => (
              <div className={`popular-card-comps`}>
                <img
                  src={e.logo}
                  alt="popular-img"
                  className="popular-comp-imgs"
                />
                <div className={` popular-comp-details`}>
                  <span className="popular-comp-type">{e.name}</span>
                </div>
              </div>
            ))}
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
                  key={e._id}
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
            {Restaurants.map((e) => (
              <PopularCard img={e.logo} type={e.name} key={e._id} />
            ))}
          </div>
        </div>
        {/* Location Div */}
        <div className="location-div-comp down-location-res">
          <div
            className="location-background"
            style={{
              position: "relative",
              backgroundImage: `url(${Images.map})`,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877481.1487000826!2d74.83031757812498!3d30.7841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107484bbb101a9%3A0x2177d3601c02d1d1!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1733221475570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: "0",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="location-inner-div">
              <div
                className="location-inner-left"
                style={{
                  zIndex: "10",
                }}
              >
                <div className="location-inner-left-inner">
                  <span className="location-inner-outlet">McDonald’s</span>
                  <span className="location-inner-name">South London</span>
                  <span className="location-inner-adress">
                    Tooley St, London Bridge, London SE1 2TF, United Kingdom
                  </span>
                  <span className="location-inner-normal">Phone number</span>
                  <span className="location-inner-colored">+934443-43</span>
                  <span className="location-inner-normal web-res">Website</span>
                  <span className="location-inner-colored web-res">
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
      </div>
      {showCart &&
      showCart != "false" &&
      ShowModalCart &&
      window.innerWidth < 900 ? (
        <div
          className="modal-overlays"
          onClick={(e) => {
            if (!e.target.closest(".modal-contents")) {
              setShowCart(false);
              setShowModalCart(false);
            }
          }}
        >
          <div className="modal-contents">
            <div className="both-comps" ref={cartRef}>
              <div className="share-cart-component">
                <div className="share-cart-left">
                  <img className="share-cart-img" src={Images.share} />
                  <span className="share-cart-text">
                    Share this cart with your friends
                  </span>
                </div>
                <div className="share-cart-right">
                  <button className="share-cart-btn" onClick={copyShareLink}>
                    Copy Link
                  </button>
                </div>
              </div>
              <CartComponent
                shared={sharedItem}
                ReloadLocalItems={ReloadLocalItems}
                cartItems={cartItems}
              />
            </div>
          </div>
        </div>
      ) : undefined}
      {sharedLoading ? <Loader text="Getting Shared Card Items" /> : undefined}
    </div>
  );
}

export default Product;

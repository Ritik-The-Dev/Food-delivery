import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  return (
    <>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/restaurants" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;

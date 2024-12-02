import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Images } from "../asests";
import "../styles/Login.css";
import { REGISTER_API } from "../api";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !address || !gender) {
      return toast.error("Please fill all the fields");
    }
    try {
      setLoading(true);
      await axios.post(REGISTER_API, {
        username: name,
        email,
        password,
        address,
        gender,
      });

      toast.success("Registration Successful!");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message ||
            error.response.data.error ||
            "Registration Failed"
        );
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-login">
      <div className="login-div">
        <div className="login-left-div">
          <div className="login-logo-div">
            <img src={Images.Logo} alt="Order.Uk" className="login-logo" />
          </div>
          <div className="login-form-div">
            <span className="login-welcome">Welcome to Order.Uk 👋</span>
            <span className="login-quote">
              Today is a new day. It's your day. You shape it. Sign Up to start
              ordering.
            </span>
            <form
              className="login-form"
              onSubmit={loading ? (e) => e.preventDefault() : handleRegister}
            >
              <div className="form-div">
                <label className="label" htmlFor="Name">
                  UserName
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="Name"
                  type="text"
                  placeholder="Username"
                  className="login-input"
                  required
                />
              </div>
              <div className="form-div">
                <label className="label" htmlFor="Email">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="Email"
                  type="email"
                  placeholder="Example@email.com"
                  className="login-input"
                  required
                />
              </div>
              <div className="form-div">
                <label className="label" htmlFor="Gender">
                  Gender
                </label>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  name="Gender"
                  type="text"
                  placeholder="Male"
                  className="login-input"
                  required
                />
              </div>
              <div className="form-div">
                <label className="label" htmlFor="Password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="Password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="login-input"
                />
              </div>
              <div className="form-div">
                <label className="label" htmlFor="Address">
                  Address
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="Address"
                  type="text"
                  placeholder="Your Address"
                  className="login-input"
                  required
                />
              </div>
              <button
                className="login-btn"
                style={{
                  backgroundColor: loading ? "gray" : "",
                }}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
              <span className="signup-text">
                Already have an account?{" "}
                <span
                  className="signup-link"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
              </span>
            </form>
          </div>
        </div>
        <div className="login-right-div">
          <img
            src={Images.Login}
            alt="Login Image"
            className="login-big-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;

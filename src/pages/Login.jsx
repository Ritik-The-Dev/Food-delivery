import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../asests";
import toast from "react-hot-toast";
import axios from "axios";
import "../styles/Login.css";
import { LOGIN_API } from "../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all the fields");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(LOGIN_API, { email, password });

      if (data.result) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        navigate("/");
        window.location.reload()
      } else {
        toast.error(data.error || "Invalid login credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Something went wrong!");
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
            <span className="login-welcome">Welcome Back 👋</span>
            <span className="login-quote">
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </span>
            <form
              className="login-form"
              onSubmit={loading ? (e) => e.preventDefault() : handleLogin}
            >
              <div className="form-div">
                {" "}
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
              <span className="forget-text">Forgot Password?</span>
              <button
                className="login-btn"
                style={{
                  backgroundColor: loading ? "gray" : "",
                }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
              <span className="signup-text">
                Don't you have an account?{" "}
                <span
                  className="signup-link"
                  onClick={() => navigate("/register")}
                >
                  Sign up
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

export default Login;

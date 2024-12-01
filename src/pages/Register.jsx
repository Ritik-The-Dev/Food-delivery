import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../asests";
import "../styles/Login.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`
      Email : ${email}
      Password : ${password}`);
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
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-div">
                {" "}
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
              <button className="login-btn">Sign Up</button>
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

import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const { backendUrl } = useContext(ShopContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  console.log("speeed");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          backendUrl + "api/v1/login",
          formData
        );
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        toast.success("Login successful");
        navigate("/home");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth"));
    console.log("use frin login");
    console.log(token);
    if (token) {
      navigate("/home");
      toast.success("You're already logged in");
    }
  }, []);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={assets.bgtest} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={assets.logo} alt="logo-image" />
          </div>
          <div className="login-center">
            <p>Please enter your details</p>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" name="email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember Me</label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
              </div>
            </form>
            <div className="google-signin">
              <button
                id="google-signin"
                onClick={() => {
                  window.location.href = backendUrl + "/api/v1/auth/google";
                }}
              >
                <img src={assets.GoogleSvg} alt="" />
                Log In with Google
              </button>
            </div>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

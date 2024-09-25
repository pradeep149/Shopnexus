import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (
      name.length > 0 &&
      lastname.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        const formData = {
          username: name + " " + lastname,
          email,
          password,
        };
        try {
          const response = await axios.post(
            "http://localhost:4000/api/v1/register",
            formData
          );
          toast.success("Registration successfull");
          navigate("/login");
        } catch (err) {
          toast.error(err.message);
        }
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You already logged in");
      navigate("/home");
    }
  }, []);

  return (
    <div className="register-main">
      <div className="register-left">
        <img src={assets.registerbg} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={assets.logo} alt="logo-image" />
          </div>
          <div className="register-center">
            <p>Please enter your details</p>
            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                placeholder="Firstname"
                name="name"
                required={true}
              />
              <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                required={true}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required={true}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required={true}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="register-center-buttons">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className="google-signup">
              <button
                id="google-signup"
                onClick={() => {
                  window.location.href =
                    "http://localhost:4000/api/v1/auth/google";
                }}
              >
                <img src={assets.GoogleSvg} alt="" />
                Sign Up with Google
              </button>
            </div>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const { token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();
  const [loaded, setTokenLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = queryParams.get("token");
    console.log("use frin dash");
    if (tokenFromUrl) {
      localStorage.setItem("auth", JSON.stringify(tokenFromUrl));
      setToken(tokenFromUrl);
      navigate("/home");
    }
    // else {
    //   const auth = JSON.parse(localStorage.getItem("auth"));
    //   if (auth) {
    //     setToken(auth);
    //   } else {
    //     toast.warn("Please login first to access dashboard");
    //     navigate("/login");
    //   }
    // }
  }, [navigate]);

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;

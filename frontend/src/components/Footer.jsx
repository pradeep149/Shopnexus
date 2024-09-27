import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm border-t pt-6 border-gray-500">
        <div>
          <img src={assets.logo} className="mb-5 w-14 rounded" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy">
                <p>Privacy policy</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
            <li>
              <Link to="/termsandconditions">
                <p>Terms and Conditions</p>
              </Link>
            </li>
            <li>
              <Link to="/cancellation-refund">
                <p>Cancellation and Refund</p>
              </Link>
            </li>
            <li>
              <Link to="/shipping-delivery">
                <p>Shipping and Delivery</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@ShopNexusyou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ ShopNexus.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

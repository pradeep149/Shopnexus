import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-5 font-medium px-[5%] ">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={assets.logo} className="w-14 rounded" alt="" />
        </Link>
        <p>ShopNexus</p>
      </div>

      <ul className="hidden sm:flex gap-5 text-xl text-gray-800">
        <NavLink
          to="/list"
          className="flex flex-col items-center gap-1 hover:text-lg duration-300"
        >
          <p>List Items</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/add"
          className="flex flex-col items-center gap-1 hover:text-lg duration-300"
        >
          <p>Add Items</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/orders"
          className="flex flex-col items-center gap-1 hover:text-lg duration-300"
        >
          <p>Orders</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setToken("")}
          className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

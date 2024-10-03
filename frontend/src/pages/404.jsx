import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const NotFoundPage = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        `}
      </style>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <img
            src={assets.scareCrow}
            alt="404 scarecrow"
            className="mx-auto w-64 md:w-80"
          />
          <h1
            className="mt-8 text-3xl font-bold md:text-5xl text-black"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            I have bad news for you
          </h1>
          <p
            className="mt-4 text-gray-600 md:text-lg"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            The page you are looking for might be removed or is temporarily
            unavailable.
          </p>
          <Link to="/">
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

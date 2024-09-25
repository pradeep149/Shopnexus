import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded-xl hover:shadow-2xl duration-300">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className=" font-medium text-lg md:text-4xl">ShopNexus</p>
          </div>
          <h1 className="prata-regular text-2xl sm:py-3 lg:text-3xl leading-relaxed">
            Only Stop for Latest Collections
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img
        className="w-full sm:w-1/2 rounded-xl"
        src={assets.hero_img}
        alt=""
      />
    </div>
  );
};

export default Hero;

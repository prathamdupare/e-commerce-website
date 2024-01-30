import React from "react";

import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";

import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className=" flex  justify-between h-full bg-gradient-to-r from-white to-pink-300">
      <div className="flex flex-1 flex-col items-start justify-center gap-[20px] pl-[180px] ">
        <h2 className="text-black text-[26px] font-semibold ml-2">
          New Arivals Only
        </h2>

        <div className="flex flex-col justify-center items-start leading-[8rem]">
          <div className="flex align-center">
            <p className="text-black text-[100px]">New</p>
            <img className="w-[105px] h-auto" src={hand_icon} alt="" />
          </div>
          <p className="text-black text-[100px]">collections</p>
          <p className="text-black text-[100px]">for everyone</p>
        </div>
        <div className="hero-latest-button flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px]  bg-red-500 text-white text-[22px] text-bold">
          <div>Latest Collection</div>

          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex flex-1 items-center justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

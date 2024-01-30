import React from "react";

import exclusive_image from "./assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers flex flex-row items-center justify-center p-[50px] mx-[200px] bg-gradient-to-r from-gray-100 to-pink-300 h-[60vh]">
      <div className="offers-left flex flex-1 flex-col justify-center ">
        <h1 className="text-gray-600 text-semibold text-[80px]">Exclusive</h1>
        <h1 className="text-gray-600 text-semibold text-[80px]">
          Offers for You
        </h1>
        <p className="text-gray-800 text-[22px] font-semibold">
          ONLY ON BEST SELLING PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-red-500 mt-[30px] border-none text-[22px] font-semibold">
          Check Now
        </button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-end ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;

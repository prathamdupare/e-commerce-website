import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter w-[3/5] h-[40vh] rounded-[10px] flex flex-col items-center justify-center m-auto p-[140px] mx-[450px]  bg-gradient-to-r from-gray-100 to-pink-300 gap-[30px]">
      <h1 className="text-gray-800 text-[55px] font-semibold ">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="font-gray-400 text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center rounded-[80px]  justify-betweem bg-white w-[730px] h-[70px] border-[1px] ">
        <input
          className="w-[500px] ml-[30px] rounded-[80px] border-0 p-[10px] text-gray-300 text-[16px] "
          type="email"
          placeholder="Your Email"
        />
        <button className="w-[210px] h-[60px] rounded-[80px] bg-black text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

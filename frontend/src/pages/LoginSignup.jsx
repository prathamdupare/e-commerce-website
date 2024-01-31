import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginSignup w-full h-[80vh] bg-pink-200 pt-[100px]">
      <div className="container w-[580px] h-[600px] bg-white m-auto p-[10px] px-[60px]">
        <h1 className="m-[20px] mx-0 text-[36px]">Sign Up </h1>
        <div className="loginsignup-fields flex flex-col gap-[30px] mt-[30px] ">
          <input
            className="h-[72px] w-full pl-[20px] border-solid border-2 border-gray-300 text-[18px] text-gray-600 border-color"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[72px] w-full pl-[20px] border-solid border-2 border-gray-300 text-[18px] text-gray-600 border-color"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-[72px] w-full pl-[20px] border-solid border-2 border-gray-300 text-[18px] text-gray-600 border-color"
            type="password"
            placeholder="password"
          />
        </div>
        <button className="w-full h-[72px] bg-red-500 mt-[30px] border-none text-[24px]  text-white font-semibold">
          Continue
        </button>
        <p className="loginsignup-login mt-[20px] text-gray-500 text-[18px] font-semibold">
          Already have and account?{" "}
          <span className="text-red-500 font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-gray-400 font-[90px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use of privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

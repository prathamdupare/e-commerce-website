import React from "react";
import footer_logo from "./assets/logo_big.png";
import instagram_icon from "./assets/instagram_icon.png";
import pinterest_icon from "./assets/pintester_icon.png";

import whatsapp_icon from "./assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-[50px]">
      <div className="footer-logo flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />

        <p className="font-gray-500 text-[46px] font-bold">SHOPPER</p>
      </div>
      <ul className="footer-links flex gap-[50px] text-gray-700 text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px] ">
        <div className="footer-icons-container">
          <img src="" alt="" />
        </div>

        <div className="footer-icons-container px-[10px] rounded-[10px] p-[6px] bg-pink-300 bg-pink-100">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container px-[10px] rounded-[10px]  p-[6px] bg-pink-300 bg-pink-100">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container px-[10px] rounded-[10px] p-[6px] bg-pink-300 bg-pink-100">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright  flex flex-col items-center gap-[30px] w-full mb-[30px] text-gray-900 text-[20px]">
        <hr className="w-4/5 border-0 rounded-[10px] h-[3px] " />
        <p>Copyright@2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

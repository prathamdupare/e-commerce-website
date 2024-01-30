import React, { useState } from "react";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-8" src={logo} alt="" />
          <p className="text-white ml-2 text-lg font-bold">Shopper</p>
        </div>
        <ul className="flex space-x-4 text-white">
          <li
            onClick={() => {
              setMenu("shop");
            }}
            className="cursor-default hover:bg-white hover:text-black p-3 rounded"
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
            className="cursor-default hover:bg-white hover:text-black p-3 rounded"
          >
            <Link to="/mens">Men</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
            className="cursor-default hover:bg-white hover:text-black p-3 rounded"
          >
            <Link to="/womens">Women</Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
            className="cursor-default hover:bg-white hover:text-black p-3 rounded"
          >
            <Link to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="flex items-center">
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img className="ml-4 h-6 text-black" src={cart_icon} alt="" />
          </Link>
          <div className="count mb-5 px-2 text-white rounded-full bg-red-600">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

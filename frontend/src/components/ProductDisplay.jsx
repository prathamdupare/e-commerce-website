import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import star_dull_icon from "./assets/star_dull_icon.png";
import star_icon from "./assets/star_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display flex flex-row m-0 ml-[170px]">
      <div className="product-diplayleft flex gap-[17px]">
        <div className="proiductdisplayleft - img list flex flex-col gap-[16px] ">
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
        </div>
        <div className="productdisplayimg">
          <img
            className="product-displaymain img w-[568px] h-[700px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-displayright m-0 mx-[70px] flex flex-col">
        <h1 className="text-gray-600 text-[40px] font-bold" s>
          {product.name}
        </h1>
        <div className="productdisplayrightstar flex items-center mt-[13px] gap-[5px] text-gray-800 text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplayright-prices flex m-[20px] mx-[0px] gap-[30px] text-[24px] font-bold">
          <div className="productdisplay-right-price-old text-gray-400 line-through">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-price-new text-red-500 ">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor si
        </div>

        <div className="productdisplay-right-size  ">
          <h1 className="mt-[55px] text-gray-400 text-[20px] font-semibold">
            Select Size
          </h1>

          <div className="productdisplayright-sizes flex m-[30px] mx-0 gap-[20px]">
            <div className="p-[18px] p-[24px] bg-white border-2 border-solid rounded-[3px]">
              S
            </div>

            <div className="p-[18px] p-[24px] bg-white border-2 border-solid rounded-[3px]">
              M
            </div>

            <div className="p-[18px] p-[24px] bg-white border-2 border-solid rounded-[3px]">
              L
            </div>

            <div className="p-[18px] p-[24px] bg-white border-2 border-solid rounded-[3px]">
              XL
            </div>

            <div className="p-[18px] p-[24px] bg-white border-2 border-solid rounded-[3px]">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="p-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-red-500 mb-[40px] border-none outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className=" product-displayright-category mt-[10px] ">
          <span className="font-semibold">Category:</span>Women, T-Shirt, Crop
          Top
        </p>

        <p className="mt-[10px] ">
          <span className="font-semibold">Tags:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

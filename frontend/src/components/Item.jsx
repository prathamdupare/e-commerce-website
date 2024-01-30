import React from "react";

const Item = (props) => {
  return (
    <div className="item w-[350px] hover:scale-110 transition duration-600">
      <img src={props.image} alt="" />
      <p className="mx-[6px]">{props.name}</p>
      <div className="item-prices flex gap-[20px]">
        <div className="item-price-new text-gray text-[18px] font-bold">
          ${props.new_price}
        </div>
        <div className="item-price-old text-gray-500 text-[18px] line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;

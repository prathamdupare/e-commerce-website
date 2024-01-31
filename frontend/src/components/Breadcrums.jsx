import React from "react";
import arrow_icon from "./assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="Breadcrums flex items-center gap-[16px] font-semibold m-[30px] mx-[170px]">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrums;

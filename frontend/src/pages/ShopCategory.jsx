import React, { useContext } from "react";

import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";

import Item from "../components/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <section className="shop-category">
      <img
        className="shopcategory-banner block mx-auto my-4 w-82%"
        src={props.banner}
        alt="Shop Category Banner"
      />
      <header className="shopcategory-indexSort m-0 mx-[170px] flex justify-between items-center">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort p-[10px] px-[20px] rounded-[80px] border border-solid-gray">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </header>
      <div className="shopcategory-products m-[30px] mx-[170px] grid grid-cols-4 gap-[80px]">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex items-center justify-center">
        <div className="shopcategory-loadmore flex justify-center items-center m-[150px] w-[233px] h-[69px] rounded-[75px] bg-gray-100 text-gray-600 font-[18px] font-semibold">
          Explore More
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;

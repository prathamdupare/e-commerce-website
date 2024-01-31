import React from "react";
import data_product from "./assets/data";
import Item from "./Item";

const RelatedProducts = () => {
  return (
    <div className="relatedp flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-gray-800 text-[50px] font-semibold">
        {" "}
        Related Products
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-gray-800" />
      <div className="relatedp-item mt-[50px] flex gap-[30px]">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

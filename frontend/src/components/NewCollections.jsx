import React from "react";
import new_collections from "./assets/new_collections";

import Item from "./Item";

const NewCollections = () => {
  return (
    <div className="popular flex flex-col items-center gap-[10px] h-[90vh] mb-[600px]">
      <h1 className="text-gray text-[50px] font-semibold mt-[50px]">
        NEW COLLECTIONS
      </h1>

      <hr className="w-[200px] h-[6px] border rounded-[10px] bg-gray-300" />
      <div className="popular-item mt-[50px] grid grid-cols-4 gap-[30px] ">
        {new_collections.map((item, i) => {
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

export default NewCollections;

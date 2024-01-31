import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import DescriptionBox from "../components/DescriptionBox";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="flex flex-col justify-center items-center">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;

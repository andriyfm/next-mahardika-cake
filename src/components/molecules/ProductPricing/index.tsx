import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductPricing: FC = () => {
  const {
    state: { product },
  } = useProduct();

  return (
    <div className="flex items-center justify-start space-x-2">
      <div className="text-base">IDR {product?.price}</div>
      <span>-</span>
      <div className="text-base">IDR {product?.maxPrice}</div>
    </div>
  );
};

export default ProductPricing;

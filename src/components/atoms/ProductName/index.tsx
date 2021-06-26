import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductInfo: FC = () => {
  const {
    state: { product },
  } = useProduct();

  return (
    <h1 className="font-serif text-4xl font-bold capitalize text-primary">
      {product?.name}
    </h1>
  );
};

export default ProductInfo;

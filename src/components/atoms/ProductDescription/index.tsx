import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductDescription: FC = () => {
  const {
    state: { product },
  } = useProduct();

  return (
    <div className="text-sm leading-loose text-darkGray">
      {product?.description}
    </div>
  );
};

export default ProductDescription;

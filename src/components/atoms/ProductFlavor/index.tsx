import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductFlavor: FC = () => {
  const {
    state: { product },
  } = useProduct();
  return (
    <div>
      <span className="text-sm capitalize text-darkGray">
        Rasa : {product?.flavor}
      </span>
    </div>
  );
};

export default ProductFlavor;

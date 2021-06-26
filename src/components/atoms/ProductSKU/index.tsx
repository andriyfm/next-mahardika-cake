import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductSKU: FC = () => {
  const {
    state: { product },
  } = useProduct();
  return (
    <div>
      <span className="text-sm capitalize text-darkGray">
        SKU : {product?.sku}
      </span>
    </div>
  );
};

export default ProductSKU;

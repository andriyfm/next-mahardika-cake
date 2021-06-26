import { useProduct } from "context/ProductContext";
import React, { FC } from "react";

const ProductCategory: FC = () => {
  const {
    state: { product },
  } = useProduct();
  return (
    <div>
      <span className="text-sm capitalize text-darkGray">
        Kategori : {product?.category}
      </span>
    </div>
  );
};

export default ProductCategory;

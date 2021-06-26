import ProductCategory from "components/atoms/ProductCategory";
import ProductDescription from "components/atoms/ProductDescription";
import ProductFlavor from "components/atoms/ProductFlavor";
import ProductName from "components/atoms/ProductName";
import ProductSKU from "components/atoms/ProductSKU";
import ProductPricing from "components/molecules/ProductPricing";
import ProductRating from "components/molecules/ProductRating";
import * as React from "react";

const ProductInfo: React.FC = () => {
  return (
    <section className="space-y-7">
      <div className="space-y-5">
        <ProductName />
        <ProductPricing />
        <ProductRating />
      </div>
      <div className="space-y-2">
        <ProductSKU />
        <ProductCategory />
        <ProductFlavor />
      </div>
      <ProductDescription />
    </section>
  );
};

export default ProductInfo;

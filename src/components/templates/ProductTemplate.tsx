import Layout from "components/organisms/Layout";
import ProductAddToCart from "components/organisms/ProductAddToCart";
import ProductInfo from "components/organisms/ProductInfo";
import ProductPreview from "components/organisms/ProductPreview";
import RelatedProducts from "components/organisms/RelatedProducts";
import { useProduct } from "context/ProductContext";
import * as React from "react";

const ProductTemplate: React.FC = () => {
  const {
    state: { product },
  } = useProduct();

  return (
    <Layout pageTitle={product?.name}>
      <div className="border-t border-purple-100">
        <div className="container pt-5 mx-auto">
          <div className="grid grid-cols-2 gap-10">
            <ProductPreview />
            <div className="space-y-10">
              <ProductInfo />
              <ProductAddToCart />
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </Layout>
  );
};

export default ProductTemplate;

import { useProduct } from "context/ProductContext";
import dataProducts, { ProductType } from "data/dataProducts";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import * as React from "react";

const ProductTemplate = dynamic(
  () => import("components/templates/ProductTemplate")
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dataProducts.map((el) => ({ params: { slug: el.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const product = dataProducts.find((el) => el.slug === ctx.params?.slug);
  return { props: { product } };
};

interface Props {
  product: ProductType;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  const { dispatch } = useProduct();

  React.useEffect(() => {
    if (product) {
      dispatch({ type: "SET_PRODUCT", product });
    }
  }, [product]);

  return <ProductTemplate />;
};

export default ProductPage;

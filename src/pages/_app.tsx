import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import * as React from "react";
import "styles/global.css";

const ProductProvider = dynamic(() => import("context/ProductContext"));

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
};
export default MyApp;

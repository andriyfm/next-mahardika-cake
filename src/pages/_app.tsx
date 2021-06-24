import * as React from "react";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;

import FooterLayout from "components/molecules/FooterLayout";
import HeaderLayout from "components/molecules/HeaderLayout";
import Head from "next/head";
import * as React from "react";

interface Props {
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({
  pageTitle = "Mahardika Cake",
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </React.Fragment>
  );
};

export default Layout;

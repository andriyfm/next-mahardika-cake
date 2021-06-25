import AboutSection from "components/organisms/AboutSection";
import FeatureSection from "components/organisms/FeatureSection";
import HeroSection from "components/organisms/HeroSection";
import Layout from "components/organisms/Layout";
import ProductsSection from "components/organisms/ProductsSection";
import * as React from "react";

const HomeTemplate: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <ProductsSection />
    </Layout>
  );
};

export default HomeTemplate;

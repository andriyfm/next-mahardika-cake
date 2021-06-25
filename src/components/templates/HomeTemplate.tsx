import AboutSection from "components/organisms/AboutSection";
import FeatureSection from "components/organisms/FeatureSection";
import HeroSection from "components/organisms/HeroSection";
import Layout from "components/organisms/Layout";
import * as React from "react";

const HomeTemplate: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      {/* Product List */}
    </Layout>
  );
};

export default HomeTemplate;

import AboutSection from "components/organisms/AboutSection";
import HeroSection from "components/organisms/HeroSection";
import Layout from "components/organisms/Layout";
import * as React from "react";

const HomeTemplate: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      {/* Feature */}
      {/* Product List */}
    </Layout>
  );
};

export default HomeTemplate;

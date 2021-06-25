import BrandLogo from "components/atoms/BrandLogo";
import Navigation from "components/atoms/Navigation";
import * as React from "react";

const HeaderLayout: React.FC = () => {
  return (
    <header className="container py-6 mx-auto bg-white">
      <div className="flex items-center justify-between">
        <BrandLogo />
        <Navigation />
      </div>
    </header>
  );
};

export default HeaderLayout;

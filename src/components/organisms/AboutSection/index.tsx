import Button from "components/atoms/Button";
import Image from "next/image";
import * as React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="container py-32 mx-auto">
      <div className="grid grid-cols-2 gap-10">
        {/* Description */}
        <div className="self-center space-y-10">
          <div className="space-y-5">
            <h2 className="font-serif text-4xl font-bold text-primary">
              Resep menuju kebahagiaan
            </h2>
            <div className="leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
            </div>
            <p className="text-sm leading-loose text-gray-600">
              Edge Themes give you everything you need to create an amazing
              website. Designed and built with care, filled with creative
              elements and useful options, and completely user-friendly. Set up
              your website quickly and with ease.Tons of shortcodes provide
              countless options. From image galleries to infographics.
            </p>
          </div>

          <div className="space-x-5">
            <Button title="cari tahu" size="md" color="primary" />
            <Button title="cari tahu" size="md" color="transparent-black" />
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-10">
          <Image
            src="/images/Rectangle 6.png"
            layout="intrinsic"
            width="280"
            height="400"
            alt="Reactangle 6"
          />
          <Image
            src="/images/Rectangle 5.png"
            layout="intrinsic"
            width="280"
            height="400"
            alt="Reactangle 5"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

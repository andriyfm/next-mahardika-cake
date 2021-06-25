import Button from "components/atoms/Button";
import Image from "next/image";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-end overflow-hidden"
      style={{ height: 768 }}
    >
      <div className="absolute top-0 left-0 w-full" style={{ height: 768 }}>
        <Image src="/images/hero-img.png" alt="hero-image" layout="fill" />
      </div>
      <div className="container mx-auto">
        <div className="relative z-10 grid w-full grid-cols-2">
          <div className="col-span-1"></div>
          <div className="col-span-1 text-center">
            <div className="text-2xl text-black">
              Hari sempurna dengan kue sempurna
            </div>
            <h1 className="mb-5 font-serif font-bold capitalize text-7xl text-primary">
              Kue Cokelat
            </h1>
            <Button title="hubungi kami" color="primary" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

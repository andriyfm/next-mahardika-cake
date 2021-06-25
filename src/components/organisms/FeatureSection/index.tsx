import Button from "components/atoms/Button";
import dataFeatures from "data/dataFeatures";
import Image from "next/image";
import * as React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="grid grid-cols-3 gap-7">
      {dataFeatures.map((item) => (
        <div key={item.title} className="relative w-full">
          <div className="relative w-full" style={{ height: 720 }}>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full text-center">
            <div className="px-14">
              <h3 className="mb-2 font-serif text-4xl font-bold text-white capitalize">
                {item.title}
              </h3>
              <p className="mb-10 overflow-hidden text-sm leading-loose text-white h-28">
                {item.description}
              </p>
              <Button title="shop now" size="sm" color="transparent" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;

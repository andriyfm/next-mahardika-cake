import { useProduct } from "context/ProductContext";
import Image from "next/image";
import * as React from "react";

const ProductPreview: React.FC = () => {
  const {
    state: { product },
  } = useProduct();

  if (!product) return null;

  return (
    <section className="space-y-6">
      <div>
        <Image
          src={product?.image.src as string}
          alt={product?.image.alt}
          layout="responsive"
          width="640"
          height="640"
          objectFit="cover"
        />
      </div>

      <div className="flex justify-start w-full space-x-6">
        <div>
          <Image
            src={product?.image.src as string}
            alt={product?.image.alt}
            layout="intrinsic"
            width="110"
            height="110"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={product?.image.src as string}
            alt={product?.image.alt}
            layout="intrinsic"
            width="110"
            height="110"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={product?.image.src as string}
            alt={product?.image.alt}
            layout="intrinsic"
            width="110"
            height="110"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;

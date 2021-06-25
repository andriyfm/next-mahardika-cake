import ProductCard from "components/molecules/ProductCard";
import dataProducts from "data/dataProducts";
import * as React from "react";

const ProductsSection: React.FC = () => {
  return (
    <section className="container py-32 mx-auto space-y-32">
      {/* Description */}
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-5xl font-bold leading-tight capitalize text-primary">
          desain kue modern & kontemporer
        </h2>
        <p className="text-2xl leading-normal text-black pl-44">
          Soufflé caramels sweet roll powder jelly-o cake apple pie danish
          liquorice marshmallow. Halvah tart topping lemon drops icing cookie
          cheesecake croissant. Cookie muffin chocolate apple pie. Chocolate bar
          carrot cake ice cream caramels. Lollipop cupcake cookie.
        </p>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-5 gap-y-10 gap-x-6">
        {dataProducts.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;

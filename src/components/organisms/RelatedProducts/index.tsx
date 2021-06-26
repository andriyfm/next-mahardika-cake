import ProductCard from "components/molecules/ProductCard";
import dataProducts from "data/dataProducts";
import * as React from "react";

const RelatedProducts: React.FC = () => {
  return (
    <section className="container py-32 mx-auto space-y-8">
      <div className="flex items-center justify-between">
        {/* Section Title */}
        <h2 className="font-serif text-4xl font-bold capitalize text-primary">
          product terkait
        </h2>

        {/* View All Button */}
        <button className="text-sm capitalize text-primary-light hover:underline">
          lihat semua
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-5 gap-y-10 gap-x-6">
        {dataProducts.slice(0, 5).map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

import * as React from "react";
import ReactStars from "react-stars";

const ProductRating: React.FC = () => {
  return (
    <div className="flex items-center justify-start space-x-2">
      <ReactStars
        edit={false}
        count={5}
        size={14}
        value={4}
        color1={"#666666"}
        color2={"#FDC621"}
      />
      <span className="text-xs capitalize">1 review</span>
    </div>
  );
};

export default ProductRating;

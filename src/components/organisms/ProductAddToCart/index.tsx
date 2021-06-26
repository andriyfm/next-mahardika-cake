import AdjustQuantity from "components/molecules/AdjustQuantity";
import CartTotal from "components/molecules/CartTotal";
import ChangeShapeAction from "components/molecules/ChangeShapeAction";
import ChangeSizeAction from "components/molecules/ChangeSizeAction";
import SelectDecorationAction from "components/molecules/SelectDecorationAction";
import SelectToppingAction from "components/molecules/SelectToppingAction";
import React, { FC } from "react";

const ProductAddToCart: FC = () => {
  return (
    <div className="space-y-6">
      <ChangeShapeAction />
      <ChangeSizeAction />
      <SelectToppingAction />
      <SelectDecorationAction />
      <CartTotal />
      <AdjustQuantity />
    </div>
  );
};

export default ProductAddToCart;

import LabelAction from "components/atoms/LabelAction";
import * as React from "react";

const CartTotal: React.FC = () => {
  return (
    <LabelAction label="total">
      <div className="text-2xl font-semibold text-primary">IDR 225.000</div>
    </LabelAction>
  );
};

export default CartTotal;

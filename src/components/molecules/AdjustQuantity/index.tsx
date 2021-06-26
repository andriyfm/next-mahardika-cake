import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import LabelAction from "components/atoms/LabelAction";
import * as React from "react";

const AdjustQuantity: React.FC = () => {
  const [qty, setQty] = React.useState("1");

  return (
    <LabelAction label="jumlah">
      <Input
        type="number"
        min={1}
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ width: 100 }}
      />
      <Button title="tambah ke keranjang" size="sm" color="primary" />
    </LabelAction>
  );
};

export default AdjustQuantity;

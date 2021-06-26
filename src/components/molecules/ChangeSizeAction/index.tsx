import ActionButton from "components/atoms/ActionButton";
import LabelAction from "components/atoms/LabelAction";
import * as React from "react";

const ChangeSizeAction: React.FC = () => {
  type SizeType = "15 cm" | "16 cm" | "22 cm";
  const [sizes] = React.useState<SizeType[]>(["15 cm", "16 cm", "22 cm"]);
  const [selectedSize, setSelectedSize] = React.useState("15 cm");

  return (
    <LabelAction label="ukuran">
      {sizes.map((item, i) => (
        <ActionButton
          key={i}
          title={item}
          isActive={item === selectedSize}
          onChange={(value) => setSelectedSize(value)}
        />
      ))}
    </LabelAction>
  );
};

export default ChangeSizeAction;

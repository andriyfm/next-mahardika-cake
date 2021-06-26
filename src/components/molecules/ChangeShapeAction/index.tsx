import ActionButton from "components/atoms/ActionButton";
import LabelAction from "components/atoms/LabelAction";
import * as React from "react";

const ChangeShapeAction: React.FC = () => {
  type ShapeType = "bulat" | "kotak";
  const [shapeList] = React.useState<ShapeType[]>(["bulat", "kotak"]);
  const [seletedShape, setSeletedShape] = React.useState("bulat");

  return (
    <LabelAction label="bentuk">
      {shapeList.map((item, i) => (
        <ActionButton
          key={i}
          title={item}
          isActive={item === seletedShape}
          onChange={(value) => setSeletedShape(value)}
        />
      ))}
    </LabelAction>
  );
};

export default ChangeShapeAction;

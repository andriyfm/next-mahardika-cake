import LabelAction from "components/atoms/LabelAction";
import Select, { SelectOptionType } from "components/atoms/Select";
import * as React from "react";

const SelectToppingAction: React.FC = () => {
  const [options] = React.useState<SelectOptionType[]>([
    { name: "FULL CHOCOLATE", value: "full-chocolate" },
    { name: "FULL CHEESE", value: "full-cheese" },
  ]);

  return (
    <LabelAction label="toping">
      <Select options={options} />
    </LabelAction>
  );
};

export default SelectToppingAction;

import LabelAction from "components/atoms/LabelAction";
import Select, { SelectOptionType } from "components/atoms/Select";
import * as React from "react";

const SelectDecorationAction: React.FC = () => {
  const [options] = React.useState<SelectOptionType[]>([
    { name: "-- PILIH DEKORASI --", value: "" },
    { name: "DEKORASI 1", value: "dekorasi-1" },
    { name: "DEKORASI 2", value: "dekorasi-2" },
    { name: "DEKORASI 3", value: "dekorasi-3" },
  ]);

  return (
    <LabelAction label="tambah dekorasi">
      <Select options={options} />
    </LabelAction>
  );
};

export default SelectDecorationAction;

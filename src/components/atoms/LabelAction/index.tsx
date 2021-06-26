import * as React from "react";

interface Props {
  label: string;
}

const LabelAction: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-start">
      <div className="w-20 py-4 text-sm font-semibold capitalize">
        {props.label}
      </div>
      <div className="flex items-center justify-start space-x-5">
        {props.children}
      </div>
    </div>
  );
};

export default LabelAction;

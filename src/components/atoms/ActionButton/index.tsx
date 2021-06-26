import * as React from "react";

interface Props {
  title: string;
  isActive?: boolean;
  onChange: (val: string) => void;
}

const ActionButton: React.FC<Props> = ({ title, isActive, onChange }) => {
  return (
    <button
      onClick={() => onChange(title)}
      className={`
      py-3 text-sm uppercase border px-7  ${
        isActive
          ? "bg-primary-lighter text-primary-light border-primary-light"
          : "bg-white border-darkGray"
      }`}
    >
      {title}
    </button>
  );
};

export default ActionButton;

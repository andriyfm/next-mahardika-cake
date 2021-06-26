import * as React from "react";

export type SelectOptionType = { name: string; value: string };

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  options: SelectOptionType[];
}

const Select: React.FC<Props> = (props) => {
  return (
    <select
      className="px-5 py-3 border border-darkGray w-60 focus:border-primary-light focus:ring-primary-light"
      {...props}
    >
      {props.options.map((item, i) => (
        <option key={i} value={item.value} className="uppercase">
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

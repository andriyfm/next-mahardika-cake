import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return (
    <input
      className={`px-5 py-3 border border-darkGray focus:border-primary-light focus:ring-0 focus:outline-none`}
      {...props}
    />
  );
};

export default Input;

import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size: "sm" | "md";
  color: "primary" | "transparent" | "transparent-black";
}

const Button: React.FC<Props> = (props) => {
  let styleSize = "";
  switch (props.size) {
    case "sm":
      styleSize = "text-sm px-6 py-xs";
      break;
    case "md":
      styleSize = "text-sm px-7 py-4";
      break;

    default:
      break;
  }

  let styleColor = "";
  switch (props.color) {
    case "primary":
      styleColor =
        "bg-primary-light border border-primary-light text-white hover:bg-opacity-90";
      break;

    case "transparent":
      styleColor =
        "bg-transparent border border-white text-white hover:bg-primary-light hover:border-primary-light";
      break;

    case "transparent-black":
      styleColor =
        "bg-transparent border border-darkGray text-darkGray hover:bg-opacity-90";
      break;

    default:
      break;
  }

  return (
    <button
      className={`font-bold uppercase transition-colors ${styleSize} ${styleColor}`}
      {...props}
    >
      {props.title}
    </button>
  );
};

export default Button;

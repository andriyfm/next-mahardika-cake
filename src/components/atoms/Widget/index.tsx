import * as React from "react";

interface Props {
  title?: string;
  children: React.ReactElement | React.ReactElement[];
}

const Widget: React.FC<Props> = (props) => {
  return (
    <div className="space-y-4">
      {props.title && (
        <h3 className="font-serif text-2xl font-bold capitalize text-primary">
          {props.title}
        </h3>
      )}
      {props.children}
    </div>
  );
};

export default Widget;

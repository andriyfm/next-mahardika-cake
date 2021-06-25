import Widget from "components/atoms/Widget";
import dataPageLinks from "data/dataPageLinks";
import Link from "next/link";
import * as React from "react";

const WidgetPages: React.FC = () => {
  return (
    <Widget title="company">
      <ul className="space-y-2">
        {dataPageLinks.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>
              <a
                className="text-base capitalize text-primary hover:underline"
                title={item.title}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Widget>
  );
};

export default WidgetPages;

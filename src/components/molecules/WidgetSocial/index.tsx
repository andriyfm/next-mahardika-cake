import Widget from "components/atoms/Widget";
import { socialIcons } from "data/dataIcons";
import * as React from "react";
import Link from "next/link";

const WidgetSocial: React.FC = () => {
  return (
    <Widget title="our online channel">
      <div className="flex items-center space-x-5">
        {socialIcons.map((item) => (
          <Link key={item.alt} href="#">
            <a>
              <img src={item.src} alt={item.alt} width="48" height="48" />
            </a>
          </Link>
        ))}
      </div>
    </Widget>
  );
};

export default WidgetSocial;

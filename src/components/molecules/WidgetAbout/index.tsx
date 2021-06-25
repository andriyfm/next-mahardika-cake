import Widget from "components/atoms/Widget";
import { marketplaceIcons } from "data/dataIcons";
import Link from "next/link";
import * as React from "react";

const WidgetAbout: React.FC = () => {
  return (
    <Widget>
      <h3 className="text-3xl font-bold uppercase text-primary">
        mahardika cake
      </h3>
      <p className="text-xs leading-loose text-black">
        Sed ut perspiciatis unde omnis iste natus and error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis quasi
      </p>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-black capitalize">follow us:</div>
        {marketplaceIcons.map((item) => (
          <Link key={item.alt} href="#">
            <a>
              <img src={item.src} alt={item.alt} width="20" height="20" />
            </a>
          </Link>
        ))}
      </div>
    </Widget>
  );
};

export default WidgetAbout;

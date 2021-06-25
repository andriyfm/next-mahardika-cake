import Widget from "components/atoms/Widget";
import { paymentIcons } from "data/dataIcons";
import * as React from "react";

const WidgetPayment: React.FC = () => {
  return (
    <Widget title="we accept">
      {/* flex flex-wrap space-x-5 space-y-5 */}
      <div className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-2">
        {paymentIcons.map((item) => (
          <div key={item.alt} className="flex items-center justify-center">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default WidgetPayment;

import * as React from "react";
import Widget from "components/atoms/Widget";

const WidgetShopOpen: React.FC = () => {
  return (
    <Widget title="jam operasional">
      <div className="space-y-1">
        <p>Senin s/d Sabtu 06:45 - 21:00</p>
        <p>Minggu 09:00 - 18:30</p>
      </div>
    </Widget>
  );
};

export default WidgetShopOpen;

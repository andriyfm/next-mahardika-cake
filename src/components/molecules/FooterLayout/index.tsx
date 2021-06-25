import WidgetAbout from "components/molecules/WidgetAbout";
import WidgetPages from "components/molecules/WidgetPages";
import WidgetPayment from "components/molecules/WidgetPayment";
import WidgetShopContact from "components/molecules/WidgetShopContact";
import WidgetShopLocation from "components/molecules/WidgetShopLocation";
import WidgetShopOpen from "components/molecules/WidgetShopOpen";
import WidgetSocial from "components/molecules/WidgetSocial";
import * as React from "react";

const FooterLayout: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t-2 border-primary-light">
      <div className="container grid grid-cols-4 mx-auto space-x-12">
        <WidgetAbout />
        <div className="space-y-10">
          <WidgetSocial />
          <WidgetPayment />
        </div>
        <WidgetPages />
        <div className="space-y-5">
          <WidgetShopOpen />
          <WidgetShopLocation />
          <WidgetShopContact />
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;

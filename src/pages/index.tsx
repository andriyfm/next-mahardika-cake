import dynamic from "next/dynamic";
import * as React from "react";

const HomeTemplate = dynamic(() => import("components/templates/HomeTemplate"));
const HomePage: React.FC = () => <HomeTemplate />;

export default HomePage;

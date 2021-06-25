import * as React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a className="text-sm font-normal uppercase hover:underline">home</a>
      </Link>
    </nav>
  );
};

export default Navigation;

import Link from "next/link";
import React from "react";

export default function Ads() {
  return (
    <div className="mx-auto max-w-7xl tracking-wide px-4">
      <div className="bg-[#F5F9FF] p-4 text-[#272560] flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:divide-x-4 md:divide-green-600">
        <h4 className="text-2xl font-bold md:px-4">zip</h4>
        <p className="m-0 md:px-4">
          <span className="font-bold m-0">own</span> it now, up to 6 months
          interest free
        </p>
        <Link href="#" className="text-xs underline md:px-4">
          learn more
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Breadcrumbs({ label }) {
  return (
    <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap p-5 md:p-0">
      <Link href="/" className="text-gray-600 dark:text-gray-200">
        Home
      </Link>

      <span className="mx-2 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
        {label}
      </a>
    </div>
  );
}

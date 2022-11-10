import React from "react";

export default function Featured() {
  return (
    <section className="text-gray-600 body-font bg-[#F5F9FF] ">
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blueTheme text-white mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                Product Support
              </h2>
              <p className="leading-relaxed text-base">
                Up to 3 years on-site warranty available for your peace of mind.
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blueTheme text-white mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                Personal Account
              </h2>
              <p className="leading-relaxed text-base">
                With big discounts, free delivery and a dedicated support
                specialist.
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blueTheme text-white mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                Amazing Savings
              </h2>
              <p className="leading-relaxed text-base">
                Up to 70% off new Products, you can be sure of the best price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

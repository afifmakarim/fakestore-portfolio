import React from "react";

export default function ReviewItem() {
  return (
    <div className="mx-auto max-w-screen-md my-4">
      <div className="mt-8 lg:px-6 lg:mt-0 ">
        <div className="flex gap-4">
          <p className="text-5xl font-semibold text-black ">“</p>
          <p className="text-black dark:text-gray-400">
            My first order arrived today in perfect condition. From the time I
            sent a question about the item to making the purchase, to the
            shipping and now the delivery, your company, Tecs, has stayed in
            touch. Such great service. I look forward to shopping on your site
            in the future and would highly recommend it.
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 ml-8">
          <button className="flex items-center justify-center rounded-full border-2 border-blueTheme bg-white p-2 md:px-4 md:py-2 text-xs font-medium text-blueTheme hover:text-blue-700">
            Leave us Reviews
          </button>
          <h3 className="text-sm font-medium text-black flex justify-end">
            -Tama Brown
          </h3>
        </div>
      </div>
    </div>
  );
}

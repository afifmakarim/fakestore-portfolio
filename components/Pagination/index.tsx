import React from "react";
import Router from "next/router";

export default function Pagination({
  number,
  tableData,
  postPerPage,
  pageName,
}) {
  const pageNumber = [];
  // getting page numbers dynamically
  for (let i = 1; i <= Math.ceil(tableData?.length / postPerPage); i++) {
    pageNumber.push(
      <button
        type="button"
        key={i}
        onClick={(e) => {
          e.preventDefault(),
            Router.push({
              pathname: "/products/",
              query: { categories: pageName, page: i },
            });
        }}
        className={`inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 [&.active]:bg-gray-100 ${
          i === parseInt(number) ? "active" : ""
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 mt-4">
      <div className="container flex items-center justify-center px-6 py-5 mx-auto space-y-6">
        <div className="-mx-2 cursor-pointer">
          <button
            disabled={number == 1}
            type="button"
            onClick={() => {
              Router.push({
                pathname: "/products/",
                query: {
                  categories: pageName,
                  page: parseInt(number) - 1,
                },
              });
            }}
            className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700"
          >
            {"<"}
          </button>
          {pageNumber}
          <button
            disabled={number < pageNumber.length ? false : true}
            type="button"
            onClick={() =>
              Router.push({
                pathname: "/products/",
                query: {
                  categories: pageName,
                  page: parseInt(number) + 1,
                },
              })
            }
            className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

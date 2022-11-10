import { Listbox, Transition, Disclosure } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import React, { useState, Fragment, useCallback, useEffect } from "react";
import Pagination from "../../Pagination";
import ProductItem from "../../ProductItem";
import ListItem from "../../ProductItem/ListItem";
import cx from "classnames";
import { getProductsByCategory } from "../../../services/fakestore-service";
import { useRouter } from "next/router";
import Breadcrumbs from "../../Breadcrumbs";
import Link from "next/link";

const collapseMenu: any[] = [
  {
    name: "Categories",
    childMenu: [
      {
        name: "electronics",
        href: "/products?categories=electronics&page=1",
      },
      {
        name: "jewelery",
        href: "/products?categories=jewelery&page=1",
      },
      {
        name: "men's clothing",
        href: "/products?categories=men's clothing&page=1",
      },
      {
        name: "women's clothing",
        href: "/products?categories=women's clothing&page=1",
      },
    ],
  },
];
export default function DesktopView({
  productList,
  selected,
  sortList,
  setSelected,
}) {
  const [ListOrGrid, setListOrGrid] = useState("LIST");

  const classGrid = cx({
    "text-[#A2A6B0] [&.active]:text-black": true,
    active: ListOrGrid === "GRID",
  });

  const classList = cx({
    "text-[#A2A6B0] [&.active]:text-black": true,
    active: ListOrGrid === "LIST",
  });

  const classListOrGrid = cx({
    "grid gap-8 mt-4": true,
    "grid-cols-1": ListOrGrid === "LIST",
    "grid-cols-2": ListOrGrid === "GRID",
  });

  const router = useRouter();
  const { categories, page } = router.query;

  // PAGINATION CONFIG
  const [postPerPage] = useState(2);

  const lastPost = parseInt(page as string) * postPerPage;
  const firstPost = lastPost - postPerPage;

  const sliceData = productList?.slice(firstPost, lastPost);

  const MapListItem = () => (
    <>
      {sliceData?.map((item, idx) => (
        <ListItem
          id={item.id}
          key={idx}
          description={item.description}
          name={item.title}
          image={item.image}
          rating={item.rating.rate}
          reviewCount={item.rating.count}
          price={item.price}
        />
      ))}
    </>
  );

  const MapGridItem = () => (
    <>
      {sliceData?.map((item, idx) => (
        <ProductItem
          id={item.id}
          key={idx}
          name={item.title}
          image={item.image}
          rating={item.rating.rate}
          reviewCount={item.rating.count}
          price={item.price}
        />
      ))}
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-6">
      <Breadcrumbs label={categories} />
      <h4 className="font-bold text-2xl capitalize py-5">{categories}</h4>
      <div className="flex">
        <div className="w-1/5 bg-[#F5F7FF] h-full py-4">
          <h4 className="flex justify-center font-bold">Filters</h4>
          <div className="flex ">
            <div className="w-full px-4 ">
              {collapseMenu.map((item, idx) => (
                <Disclosure key={idx}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between border-b py-4 text-left text-sm font-medium ">
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 flex flex-col">
                        {item.childMenu.map((itemChild, idxChild) => (
                          <Link
                            key={idxChild}
                            href={itemChild.href}
                            className="block px-2 pt-4 text-sm text-slate-500 font-light capitalize transition-colors duration-300 transform hover:text-white"
                          >
                            {itemChild.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col p-5">
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600">Page {page}</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <div className="w-60">
                  <>
                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full border-2 cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selected}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {sortList.map((item, idx) => (
                              <Listbox.Option
                                key={idx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={item}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {item}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  className={classGrid}
                  type="button"
                  onClick={() => setListOrGrid("GRID")}
                >
                  <Squares2X2Icon className="w-4 h-4 " />
                </button>
                <button
                  className={classList}
                  type="button"
                  onClick={() => setListOrGrid("LIST")}
                >
                  <ListBulletIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className={classListOrGrid}>
            {ListOrGrid === "LIST" ? <MapListItem /> : <MapGridItem />}
          </div>
          <Pagination
            number={page}
            pageName={categories}
            tableData={productList}
            postPerPage={postPerPage}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, Fragment, useCallback, useEffect } from "react";
import Breadcrumbs from "../../Breadcrumbs";
import Pagination from "../../Pagination";
import ProductItem from "../../ProductItem";
import dynamic from "next/dynamic";
import DesktopView from "./DesktopView";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import { getProductsByCategory } from "../../../services/fakestore-service";
import { useRouter } from "next/router";
import Spinner from "../../Spinner";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const sortList = ["Price: High to Low", "Price: Low to High"];

export default function CategoryProducts() {
  const [selected, setSelected] = useState(sortList[1]);
  const [productList, setProductList] = useState([]);
  console.log("DATA ", productList);
  const sortPrice =
    selected === "Price: Low to High"
      ? productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      : selected === "Price: High to Low"
      ? productList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      : productList;

  const { query, isReady } = useRouter();
  const { categories, page, search } = query;

  useEffect(() => {
    if (!isReady) {
      console.log("Router not ready");
      return;
    }

    const getProductCategoryList = async () => {
      const { data } = await getProductsByCategory(categories as string);
      setProductList(data);
    };
    getProductCategoryList();
  }, [isReady, categories, page]);

  return (
    <MediaQuery minWidth={768}>
      {(matches) =>
        matches ? (
          <DesktopView
            productList={sortPrice}
            selected={selected}
            sortList={sortList}
            setSelected={setSelected}
          />
        ) : (
          <div className="max-w-7xl mx-auto ">
            <Breadcrumbs label="Category" />
            <div className="px-5 pb-5">
              <h4 className="font-bold text-lg capitalize">{categories}</h4>
              <div className="flex gap-4 my-4">
                <div className="w-1/2">
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
                            {sortList.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? "bg-amber-100 text-amber-900"
                                      : "text-gray-900"
                                  }`
                                }
                                value={person}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {person}
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
              <p className="text-gray-300 text-xs my-2">
                Items {productList.length}
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {sortPrice?.map((item, idx) => (
                  <ProductItem
                    key={idx}
                    id={item.id}
                    name={item.title}
                    image={item.image}
                    rating={item.rate}
                    reviewCount={item.rating.count}
                    price={`$${item.price}`}
                  />
                ))}
              </div>
              {/* <Pagination
                number={number}
                setNumber={setNumber}
                tableData={productList}
                postPerPage={postPerPage}
              /> */}
            </div>
          </div>
        )
      }
    </MediaQuery>
  );
}

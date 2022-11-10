import Link from "next/link";
import React, { useCallback, useState, useEffect } from "react";
import { getNewProducts } from "../../../services/fakestore-service";
import ProductItem from "../../ProductItem";

export default function NewProductSection() {
  const [productList, setProductList] = useState([]);

  const getNewProductList = useCallback(async () => {
    const { data } = await getNewProducts();
    setProductList(data);
  }, [getNewProducts]);

  useEffect(() => {
    getNewProductList();
  }, []);

  return (
    <>
      <div className="md:px-6 mx-auto max-w-7xl px-4 items-center my-4">
        <div className="flex justify-between my-4">
          <h4 className="text-xl font-bold">New Products</h4>
          <Link
            href="/results?search_query=all"
            className="text-sm text-blueTheme underline"
          >
            See All New Products
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {productList?.map((item, idx) => (
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
        </div>
      </div>
    </>
  );
}

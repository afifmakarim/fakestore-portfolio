import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../Breadcrumbs";
import ButtonTheme from "../../Button";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const CartListNoSSR = dynamic(() => import("./CartList"), {
  ssr: false,
});
export default function ShoppingCartSection() {
  const cart = useSelector((state: any) => state?.cart);

  const getTotalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const shipping = 21.0;
  const tax = 1.91;
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 mt-4 px-4 md:px-0">
        <Breadcrumbs label="Cart" />
        <h4 className="text-2xl font-bold">Shopping Cart</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <table className="table-auto col-span-1 md:col-span-2 ">
            <thead className="border-b">
              <tr>
                <th className="font-bold py-4 px-4 pt-0 pb-3 text-slate-400 text-left">
                  Items
                </th>
                <th className="font-bold py-4 px-4 pt-0 pb-3 text-slate-400 text-left">
                  Price
                </th>
                <th className="font-bold py-4 px-4 pt-0 pb-3 text-slate-400 text-left">
                  Qty
                </th>
                <th className="font-bold py-4 px-4 pt-0 pb-3 text-slate-400 text-left">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, idx) => (
                <CartListNoSSR
                  key={idx}
                  name={item.name}
                  image={item.image}
                  qty={item.quantity}
                  price={item.price}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 flex gap-2">
                  <Link href="/">
                    <ButtonTheme label="Continue Shopping" theme="OUTLINE" />
                  </Link>
                  <ButtonTheme
                    label="Clear Shopping Cart"
                    tailwindClass="bg-black"
                  />
                </td>
                <td></td>
                <td></td>
                <td className="py-4 text-end">
                  <ButtonTheme
                    tailwindClass="bg-black"
                    label="Update Shopping Cart"
                  />
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="order-first mb-4 md:order-last md:mb-0">
            <div className="w-full bg-[#F5F9FF] h-full">
              <div className="p-4 flex flex-col">
                <h4 className="font-bold text-lg">Summary</h4>
                <p className="py-2">Estimate Shipping and Tax</p>
                <p className="text-xs text-gray-400 pb-4">
                  Enter your destination to get a shipping estimate.
                </p>
                <div className="border-t-2 py-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-medium">
                    <h4>Subtotal</h4>
                    <h4>${getTotalPrice}</h4>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <h4>Shipping</h4>
                    <h4>${shipping}</h4>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <h4>Tax</h4>
                    <h4>${tax}</h4>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <h4>Order Total</h4>
                    <h4>${getTotalPrice + shipping + tax}</h4>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <ButtonTheme label="Proceed to Checkout" />
                  <ButtonTheme label="Checkout with PayPal" theme="YELLOW" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

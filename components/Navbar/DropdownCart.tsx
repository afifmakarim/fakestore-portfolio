import { Menu, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  ShoppingCartIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cart.slice";
import Link from "next/link";

interface DropDownCartProps {
  desktopView?: boolean;
}

export default function DropdownCart({
  desktopView,
}: Partial<DropDownCartProps>) {
  const classColor = cx({
    "h-6 w-6 text-gray-500 hover:text-gray-900": desktopView,
    "h-8 w-8 text-white": !desktopView,
  });

  const badgeColor = cx({
    "absolute -top-1 -right-2 h-5 w-5 rounded-full bg-blueTheme flex justify-center items-center text-white":
      desktopView,
    "absolute -top-0 -right-2 h-5 w-5 rounded-full bg-white flex justify-center items-center text-blueTheme":
      !desktopView,
  });
  const cart = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();

  const getTotalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const [cartSize, setCartsize] = useState(0);

  const cartSizeStore = cart.length;

  useEffect(() => {
    setCartsize(cartSizeStore);
  }, [cartSizeStore]);

  return (
    <Menu as="div" className="relative text-left">
      <Menu.Button className="w-full justify-center flex items-center">
        <div className="relative items-center text-xs font-medium">
          <span className={badgeColor}>
            <span>{cartSize}</span>
          </span>
          <ShoppingCartIcon className={classColor} aria-hidden="true" />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-4">
            <div className="flex flex-col px-4">
              <h4 className="flex justify-center font-bold text-lg">My Cart</h4>
              <p className="flex justify-center text-xs text-gray-400">
                {cartSize} item in cart
              </p>
              <Link
                href="/cart"
                className="my-4 text-xs flex w-full items-center justify-center rounded-full border-2 border-blueTheme bg-white p-2 md:px-4 md:py-2 font-medium text-blueTheme hover:text-blue-700 "
              >
                View or Edit Your Cart
              </Link>
            </div>
            <div className="grid grid-cols-1 divide-y-2 border-y-2 overflow-y-auto h-32">
              {cart?.map((item, idx) => (
                <div className="flex items-center px-2 py-4 gap-3" key={idx}>
                  <h4>{`${item.quantity}x`}</h4>
                  <Image
                    src={item.image}
                    className="h-16 w-16"
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                  <p className="text-xs">
                    {item.name.length > 30
                      ? item.name.slice(0, 30) + "..."
                      : item.name}
                  </p>
                  <div className="flex-col space-y-1">
                    <button
                      className="rounded-full border-2 p-1"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <XMarkIcon className="h-2 w-2" />
                    </button>
                    <div className="rounded-full border-2 p-1">
                      <PencilIcon className="h-2 w-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4 flex-col">
              <h4 className="mb-4">
                <span className="text-gray-400">Subtotal: </span>
                <span className="text-black font-bold">${getTotalPrice}</span>
              </h4>
              <div className="flex flex-col gap-2">
                <button className="w-full rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueTheme hover:bg-blue-500">
                  Go to Checkout
                </button>
                <button className="w-full rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueTheme hover:bg-blue-500">
                  Check out with PayPal
                </button>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

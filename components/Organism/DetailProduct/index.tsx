import {
  EnvelopeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import cx from "classnames";
import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import DesktopView from "./DesktopView";
import ButtonTheme from "../../Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

export default function DetailProduct({ id, name, description, image, price }) {
  let [categories] = useState({
    "About Product": [],
    Details: [],
  });

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <MediaQuery minWidth={768}>
      {(matches) =>
        matches ? (
          <DesktopView
            id={id}
            name={name}
            description={description}
            image={image}
            price={price}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative flex justify-center py-8">
              <Image src={image} alt={name} width={200} height={200} />
              <div className="absolute left-0 top-0 h-16 w-16">
                <div className="flex flex-col gap-1 pt-4">
                  <div className="border rounded-full p-1 flex justify-center h-6 w-6 text-gray-400">
                    <HeartIcon />
                  </div>
                  <div className="border rounded-full p-1 flex justify-center h-6 w-6 text-gray-400">
                    <EnvelopeIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md px-2 pt-4 pb-8 sm:px-0 border-b-2">
              <Tab.Group>
                <Tab.List className="relative flex space-x-1 p-1 justify-start">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        cx(
                          "w-2/5 py-1 text-sm font-medium leading-5",
                          "focus:outline-none",
                          selected
                            ? "border-b-2 border-blueTheme border-w text-blueTheme"
                            : "text-gray-600"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel className={cx("rounded-xl bg-white p-3")}>
                    <div className="grid grid-cols-1 gap-2 ">
                      <h4>{name}</h4>
                      <p className="text-xs text-blueTheme">
                        Be the first to review this product
                      </p>
                      <p className="text-xs ">{description}</p>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className={cx("rounded-xl bg-white p-3")}>
                    <div className="grid grid-cols-1 gap-2 ">
                      <h4>{name}</h4>
                      <p className="text-xs text-blueTheme">
                        Be the first to review this product
                      </p>
                      <p className="text-xs ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae architecto reiciendis earum aliquid qui dolores
                        consequatur accusantium officia voluptas, dicta ut harum
                        doloremque facere, maxime ex distinctio labore velit
                        ratione.
                      </p>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>

            <div className="flex gap-2 h-auto my-4">
              <input
                type="number"
                className="flex-none w-8 bg-[#F5F9FF] rounded-md px-2 text-center text-xs"
                min={1}
                max={99}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <ButtonTheme
                label="Add to cart"
                tailwindClass="w-full"
                onClick={() =>
                  dispatch(addToCart({ id, name, price, image, quantity }))
                }
              />
              <ButtonTheme
                label="PayPal"
                theme="YELLOW"
                tailwindClass="w-full"
              />
            </div>
          </div>
        )
      }
    </MediaQuery>
  );
}

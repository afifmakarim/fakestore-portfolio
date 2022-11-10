import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { addToCart } from "../../../redux/cart.slice";
import Breadcrumbs from "../../Breadcrumbs";
import ButtonTheme from "../../Button";
import { useDispatch } from "react-redux";

export default function DesktopView({
  id,
  name,
  description,
  image,
  price,
  quantity,
  setQuantity,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border-b-2">
        <div className="flex p-8 justify-between max-w-7xl mx-auto">
          <div className="flex">
            <h4 className="border-b-2 border-blueTheme font-bold">
              About Product
            </h4>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-10 bg-[#F5F9FF] rounded-md px-2 text-center text-xs"
              min={0}
              max={99}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <ButtonTheme
              label="Add to cart"
              tailwindClass="grow w-full"
              onClick={() =>
                dispatch(addToCart({ id, name, price, image, quantity }))
              }
            />
            <ButtonTheme
              label="PayPal"
              theme="YELLOW"
              tailwindClass="flex-1 w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 bg-[#F5F9FF] flex justify-center">
          <div className="max-w-lg py-16">
            <Breadcrumbs label="Details" />
            <h4 className="my-4 font-bold text-lg">{name}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative flex justify-center py-8">
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="max-h-80 object-contain"
            />
            <div className="absolute left-10 top-0 h-16 w-16">
              <div className="flex flex-col gap-1 pt-4">
                <div className="border-2 border-gray-400 rounded-full p-1 flex justify-center h-8 w-8 text-gray-400">
                  <HeartIcon />
                </div>
                <div className="border-2 border-gray-400 rounded-full p-1 flex justify-center h-8 w-8 text-gray-400">
                  <EnvelopeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

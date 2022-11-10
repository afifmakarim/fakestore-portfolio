import {
  ChartBarIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonTheme from "../Button";
import Rating from "../Rating";

export default function ListItem({
  id,
  name,
  description,
  image,
  price,
  rating,
  reviewCount,
}) {
  return (
    <div className="flex p-6 gap-8 hover:shadow-lg hover:duration-300 ease-in">
      <div className="flex flex-col min-w-max items-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain max-h-36 h-full"
        />
        <Rating value={rating} count={reviewCount} />
      </div>
      <div className="flex flex-col justify-between text-xs space-y-6">
        <Link className="hover:text-blueTheme" href={`/products/details/${id}`}>
          {name}
        </Link>
        <p>{description}</p>
        <h4 className="font-bold text-lg">${price}</h4>
        <ButtonTheme
          label={
            <>
              <ShoppingCartIcon className="h-4 w-4 mr-2" />
              Add to cart
            </>
          }
          theme="OUTLINE"
          tailwindClass="flex w-40 justify-center"
        />
      </div>
      <div className="flex flex-col basis-1/4 justify-between">
        <div className="text-xs font-light text-greenTheme space-x-1 flex items-center justify-end">
          <CheckCircleIcon className="h-5 w-5 inline-block" />
          <span>in stock</span>
        </div>
        <div className="text-xs font-light text-gray-400 space-x-1 flex items-center justify-end">
          <div className="border-2 rounded-full py-2 px-2 border-gray-400">
            <EnvelopeIcon className="h-4 w-4 inline-block" />
          </div>
          <div className="border-2 rounded-full py-2 px-2 border-gray-400">
            <ChartBarIcon className="h-4 w-4 inline-block" />
          </div>
          <div className="border-2 rounded-full py-2 px-2 border-gray-400">
            <HeartIcon className="h-4 w-4 inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

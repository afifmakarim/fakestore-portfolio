import { CheckCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonTheme from "../Button";
import Rating from "../Rating";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

export default function ProductItem({
  id,
  name,
  image,
  price,
  rating,
  reviewCount,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="group flex flex-col px-4 hover:cursor-pointer max-w-screen-sm">
        <h4 className="text-xs my-2 text-greenTheme space-x-1 flex items-center">
          <CheckCircleIcon className="h-5 w-5 inline-block" />
          <span className="font-bold">in stock</span>
        </h4>
        <div className="flex flex-col justify-between h-full text-black">
          <div className="flex flex-col gap-2">
            <Image
              src={image}
              alt={name}
              width={200}
              height={100}
              className="object-contain max-h-36 h-full"
            />
            <Rating value={rating} count={reviewCount} />
            <Link
              className="text-base hover:text-blueTheme"
              href={`/products/details/${id}`}
            >
              {name.length > 50 ? name.slice(0, 50) + "..." : name}
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-bold my-2 ">${price}</h4>
            <div className="opacity-0 font-semibold my-4 group-hover:opacity-100 transition-opacity duration-300 ease-in">
              <ButtonTheme
                label={
                  <>
                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                    Add to cart
                  </>
                }
                theme="OUTLINE"
                tailwindClass="flex flex-nowrap items-center justify-center w-full"
                onClick={() => dispatch(addToCart({ id, name, price, image }))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

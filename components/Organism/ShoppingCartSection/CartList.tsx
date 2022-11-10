import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CartList({ name, image, price, qty }) {
  //   const cart = useSelector((state: any) => state?.cart);

  //   const [cartSize, setCartsize] = useState(0);

  //   const cartSizeStore = cart.length;

  //   useEffect(() => {
  //     setCartsize(cartSizeStore);
  //   }, [cartSizeStore]);

  return (
    <>
      <tr className="border-b">
        <td className="py-4 flex items-center gap-5 ">
          <Image src={image} width={80} height={80} alt={name} />
          <div>{name}</div>
        </td>
        <td className="py-4">{price}</td>
        <td className="py-4">
          <input
            type="number"
            value={qty}
            className="w-10 bg-[#F5F9FF] rounded-md p-4 text-center text-xs"
            disabled
          />
        </td>
        <td className="py-4">{price * qty}</td>
      </tr>
    </>
  );
}

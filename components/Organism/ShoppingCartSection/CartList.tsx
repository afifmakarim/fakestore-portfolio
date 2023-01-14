import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InputField from "../../InputField";

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
        <td className="p-2 text-center">
          <div className="flex items-center gap-5">
            <Image src={image} width={80} height={80} alt={name} />
            <p>{name}</p>
          </div>
        </td>
        <td className="p-2 text-center">{price}</td>
        <td className="p-2 text-center">
          <InputField value={qty} type="number" />
        </td>
        <td className="p-2 text-center">{price * qty}</td>
      </tr>
    </>
  );
}

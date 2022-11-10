import Image from "next/image";
import React from "react";

export default function Sponsored() {
  const sponsoredImage = [
    { imageUrl: "/sponsored/sponsored-1.svg" },
    { imageUrl: "/sponsored/sponsored-2.svg" },
    { imageUrl: "/sponsored/sponsored-3.svg" },
    { imageUrl: "/sponsored/sponsored-4.svg" },
    { imageUrl: "/sponsored/sponsored-5.svg" },
    { imageUrl: "/sponsored/sponsored-6.svg" },
    { imageUrl: "/sponsored/sponsored-7.svg" },
  ];
  return (
    <div className="md:px-6 mx-auto max-w-7xl px-4 my-8">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-7 place-items-center">
        {sponsoredImage.map((item, idx) => (
          <Image
            key={idx}
            src={item.imageUrl}
            alt=""
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}

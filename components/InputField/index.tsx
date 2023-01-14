import React from "react";

export default function InputField({ value, type, ...otherProps }) {
  return (
    <input
      type="number"
      value={value}
      className="w-10 bg-[#F5F9FF] rounded-md p-2 text-center text-xs"
      {...otherProps}
    />
  );
}

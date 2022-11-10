import React from "react";

export default function ButtonTheme(props) {
  const { label, theme, tailwindClass, ...nativeProps } = props;

  if (theme === "OUTLINE") {
    return (
      <>
        <button
          {...nativeProps}
          className={`rounded-full border-2 border-blueTheme px-4 py-2 text-xs font-medium tracking-wide text-blueTheme capitalize transition-colors duration-300 transform bg-white hover:text-blue-800 hover:border-blue-800 ${
            tailwindClass ? tailwindClass : ""
          }`}
        >
          {label}
        </button>
      </>
    );
  }

  if (theme === "YELLOW") {
    return (
      <>
        <button
          {...nativeProps}
          className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 hover:bg-yellow-500 ${
            tailwindClass ? tailwindClass : ""
          }`}
        >
          {label}
        </button>
      </>
    );
  }

  return (
    <>
      <button
        {...nativeProps}
        className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blueTheme hover:bg-blue-500 ${
          tailwindClass ? tailwindClass : ""
        }`}
      >
        {label}
      </button>
    </>
  );
}

import React from "react";
import { ComponentProps } from "react";

const CTAButton = ({
  className,
  text,
  ...rest
}: ComponentProps<"button"> & { text: string }) => {
  return (
    <button
      {...rest}
      className={`inline-flex items-center  bg-black px-3 py-2  font-semibold text-white hover:bg-black/80 justify-center ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;

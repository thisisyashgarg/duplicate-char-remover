import React from "react";
import { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";

const CTAButton = ({
  className,
  text,
  ...rest
}: ComponentProps<"button"> & { text: string }) => {
  return (
    <button
      {...rest}
      className={`inline-flex items-center rounded-md bg-black px-3 py-2  font-semibold text-white hover:bg-black/80 ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;

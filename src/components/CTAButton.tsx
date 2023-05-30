import React from "react";
import { ComponentProps } from "react";

const CTAButton = ({
  className,
  text,
  ...rest
}: ComponentProps<"button"> & { text: string }) => {
  return (
    <button {...rest} className={`border-3 ${className}`}>
      {text}
    </button>
  );
};

export default CTAButton;

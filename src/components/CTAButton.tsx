import React from "react";
import { ComponentProps } from "react";

const CTAButton = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`${className}`}>
      Submit
    </button>
  );
};

export default CTAButton;

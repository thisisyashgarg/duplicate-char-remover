import React from "react";
import { ComponentProps } from "react";

const InputBox = ({ className, ...rest }: ComponentProps<"input">) => {
  return (
    <input type="text" className={`border-4 w-[50vw] ${className}`} {...rest} />
  );
};

export default InputBox;

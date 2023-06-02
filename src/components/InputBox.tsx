import React from "react";
import { ComponentProps } from "react";

export type InputBoxProps = ComponentProps<"input">;

const InputBox = ({ className, ...rest }: InputBoxProps) => {
  return (
    <>
      <div className="w-80 space-y-3">
        <label
          className="text-4xl  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="string"
        >
          Enter a string
        </label>
        <input
          placeholder="e.g. Mississippi, Bumblebee"
          name="string"
          className={`flex h-10 w-full rounded-md border border-black/30 bg-transparent px-2 py-2  text-l placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          type="text"
          {...rest}
        ></input>
      </div>
    </>
  );
};

export default InputBox;

import React from "react";
import CTAButton from "./CTAButton";

const Card = ({ char }: { char: string }) => {
  return (
    <div className="flex flex-col border-4 p-2 m-2">
      <h1>{char}</h1>
      <CTAButton text="Delete" />
    </div>
  );
};

export default Card;

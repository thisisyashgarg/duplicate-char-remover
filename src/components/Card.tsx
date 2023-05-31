import React, { ComponentProps, useContext, useEffect, useState } from "react";
import { CharacterDataContext } from "../context/DataContext";
import {
  createOccurrenceMap,
  deleteAllElementsFromTheArrayExceptGivenIndex,
} from "../helper";
import CTAButton from "./CTAButton";

type CardProps = {
  char: string;
  index: number;
} & ComponentProps<"div">;

const Card = ({ char, index, className, ...rest }: CardProps) => {
  const { arrayOfChar, setArrayOfChar } = useContext(CharacterDataContext);
  const occurrenceMap = createOccurrenceMap(arrayOfChar);

  function handleDelete() {
    const modifiedArray = deleteAllElementsFromTheArrayExceptGivenIndex(
      arrayOfChar,
      char,
      index
    );
    setArrayOfChar(() => [...modifiedArray]);
  }

  return (
    <div
      className={`flex flex-col border-4 p-2 m-2 w-24 h-24 items-center justify-center ${className}`}
      {...rest}
    >
      <h1>{char}</h1>
      {!(occurrenceMap.get(char) === 1) && (
        <CTAButton text="Delete" className="border-2" onClick={handleDelete} />
      )}
    </div>
  );
};

export default Card;

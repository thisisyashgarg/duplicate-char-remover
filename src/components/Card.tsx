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
    // <div
    //   className={`flex flex-col  border-2 rounded-md m-2 w-24 h-24 items-center justify-center space-y-4 ${className}`}
    //   {...rest}
    // >
    //   <h1 className="font-bold text-xl">{char}</h1>
    //   {!(occurrenceMap.get(char) === 1) && (
    //     <CTAButton text="x" onClick={handleDelete} />
    //   )}
    // </div>
    <div
      className={`relative flex flex-col border-2 rounded-md m-2 w-24 h-24 items-center justify-center space-y-4 ${className}`}
      {...rest}
    >
      <h1 className="font-bold text-xl">{char}</h1>
      {!(occurrenceMap.get(char) === 1) && (
        <div className="absolute top-0 right-0 -mr-3  ">
          <CTAButton
            text="x"
            onClick={handleDelete}
            className="text-white bg-grey-100 p-2 rounded-full shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default Card;

import React, { ComponentProps, useContext, useEffect, useState } from "react";
import { CharacterDataContext } from "../context/DataContext";
import {
  createOccurrenceMap,
  deleteAllElementsFromTheArrayExceptGivenIndex,
} from "../helper";
import { FaTimes } from "react-icons/fa";
import clsx from "clsx";

type CardProps = {
  char: string;
  index: number;
} & ComponentProps<"div">;

const Card = ({ char, index, ...rest }: CardProps) => {
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
      className={clsx(
        `relative flex flex-col border-2 rounded-md m-2 w-24 h-24 items-center justify-center space-y-4 `
        // `bg-[${color}]`
      )}
      {...rest}
    >
      <h1 className="font-bold text-xl ">{char}</h1>
      {/* Rendering those characters which are not unique */}
      {!(occurrenceMap.get(char) === 1) && (
        <button
          className="delete-button border-2 rounded-full"
          onClick={handleDelete}
        >
          <FaTimes className="delete-icon absolute text-gray-300 -top-3 -right-2 text-2xl bg-gray-400" />
        </button>
      )}
    </div>
  );
};

export default Card;

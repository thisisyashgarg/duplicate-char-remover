import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";
import Error from "../components/Error";
import Success from "../components/Success";
import { CharacterDataContext } from "../context/DataContext";
import { getHexColorCode, hasUniqueCharactersInAGivenArray } from "../helper";

import Confetti from "react-confetti";

const AllCards = () => {
  const { arrayOfChar, originalString, setArrayOfChar } =
    useContext(CharacterDataContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const modifiedString = arrayOfChar.join("");
  const { width, height } = window.screen;
  const navigate = useNavigate();

  useEffect(() => {
    if (
      hasUniqueCharactersInAGivenArray(arrayOfChar) &&
      arrayOfChar.length > 0
    ) {
      setIsSuccess(true);
    }
  }, [arrayOfChar]);

  function handleBackButton() {
    setArrayOfChar(() => []);
    navigate("/");
  }

  return arrayOfChar.length === 0 ? (
    <Error />
  ) : (
    <div className=" h-screen flex flex-col  items-center justify-center space-y-4 mx-6">
      {isSuccess && <Confetti />}
      {isSuccess ? (
        <Success />
      ) : (
        <h1 className="text-xl text-center font-bold ">
          Your goal is to remove all the duplicate characters from the deck of
          cards
        </h1>
      )}

      <p className="text-xl">
        <span className="font-bold"> {originalString}</span> ➞ {modifiedString}
      </p>

      <div className="flex flex-wrap justify-center">
        {arrayOfChar.map((char, index) => {
          return (
            <Card
              key={`${index}${char}`}
              index={index}
              char={char}
              className={`bg-[${getHexColorCode(char)}]`}
            />
          );
        })}
      </div>
      <CTAButton
        text="&#8592; Homepage"
        onClick={handleBackButton}
        className="text-xl"
      />
    </div>
  );
};

export default AllCards;

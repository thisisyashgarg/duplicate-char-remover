import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";
import Error from "../components/Error";
import Success from "../components/Success";
import { CharacterDataContext } from "../context/DataContext";
import { hasUniqueCharactersInAGivenArray } from "../helper";

import Confetti from "react-confetti";

const AllCards = () => {
  const { arrayOfChar, originalString, setArrayOfChar } =
    useContext(CharacterDataContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const modifiedString = arrayOfChar.join("");
  const navigate = useNavigate();

  // Checking if the user has successfully removed all the duplicate characters
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
    // If the array of characters is empty, then redirect to the homepage
    <Error />
  ) : (
    <div className="h-screen flex flex-col items-center justify-center space-y-4 mx-6">
      {/* // If the array of characters is not empty and the user has
      successfully, removed all the duplicate characters, then display the
      success message */}
      {isSuccess && <Confetti />}

      {/* // If the array of characters is not empty, then display the cards */}
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
        {/* // Looping through the array of characters and displaying the cards */}
        {arrayOfChar.map((char, index) => {
          return (
            <Card
              key={`${index}${char}`}
              index={index}
              char={char}
              //   color={getHexColorCode(char)}
            />
          );
        })}
      </div>
      <CTAButton
        text="&#8592; Homepage"
        onClick={handleBackButton}
        className="text-xl rounded-md"
      />
    </div>
  );
};

export default AllCards;

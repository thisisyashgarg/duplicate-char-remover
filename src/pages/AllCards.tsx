import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";
import Error from "../components/Error";
import Success from "../components/Success";
import { CharacterDataContext } from "../context/DataContext";
import { getHexColorCode, hasUniqueCharactersInAGivenArray } from "../helper";

const AllCards = () => {
  const { arrayOfChar, originalString, setArrayOfChar } =
    useContext(CharacterDataContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const modifiedString = arrayOfChar.join("");
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
    <>
      <CTAButton text="Go Back to Homepage" onClick={handleBackButton} />
      <h1>Original String : {originalString}</h1>
      <h1>Modified String: {modifiedString}</h1>
      <div className="flex flex-wrap">
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
      {isSuccess && <Success />}
    </>
  );
};

export default AllCards;

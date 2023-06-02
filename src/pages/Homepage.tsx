import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import InputBox from "../components/InputBox";
import { CharacterDataContext } from "../context/DataContext";
import { convertStringToCharacterArray } from "../helper";

const Homepage = () => {
  const { setArrayOfChar, setOriginalString } =
    useContext(CharacterDataContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Clearing the array of characters when the user navigates back to the homepage
  useEffect(() => {
    setArrayOfChar(() => []);
  }, []);

  function handleSubmit() {
    // Checking if the user has entered a non-empty value
    if (inputValue.trim() === "") {
      setError(true);
      setArrayOfChar(() => []);
      return;
    }
    setError(false);

    // Converting the string to an array of characters
    const convertedArray = convertStringToCharacterArray(
      inputValue.replace(/\s/g, "")
    );

    // Storing the original string and the array of characters in the context
    setArrayOfChar((prev) => (prev = convertedArray));
    setOriginalString((prev) => (prev = inputValue));
    navigate("/cards");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <InputBox
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* // Displaying the error message if the user has entered a empty value */}
      {error && (
        <p className="mt-1 text-s text-red-500 text-left">
          * Enter a non-empty value
        </p>
      )}

      <CTAButton
        type="submit"
        onClick={handleSubmit}
        text="Submit &#8594;"
        className="text-xl rounded-md"
      />
    </div>
  );
};

export default Homepage;

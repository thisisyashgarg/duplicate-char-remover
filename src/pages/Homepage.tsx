import React from "react";
import InputBox from "../components/InputBox";
import CTAButton from "../components/CTAButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import CharacterDataContext from "../context/DataContext";

const Homepage = () => {
  const { arrayOfChar, setArrayOfChar, setOriginalString } =
    useContext(CharacterDataContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  console.log(arrayOfChar);

  function convertStringToCharacterArray(input: string): string[] {
    const arrayOfChar = input.split("");
    return arrayOfChar;
  }

  function handleSubmit() {
    if (inputValue.trim() === "") {
      setError(true);
      setArrayOfChar(() => []);
      return;
    }
    setError(false);
    const data = convertStringToCharacterArray(inputValue);
    setArrayOfChar((prev) => (prev = data));
    setOriginalString((prev) => (prev = inputValue));
    navigate("/cards");
  }

  return (
    <div className="flex flex-col items-center">
      <InputBox
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {error && <p className="text-red-500">Enter a non-empty value</p>}
      <CTAButton type="submit" onClick={handleSubmit} text="Submit" />
    </div>
  );
};

export default Homepage;

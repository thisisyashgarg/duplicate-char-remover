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

  useEffect(() => {
    setArrayOfChar(() => []);
  }, []);

  function handleSubmit() {
    if (inputValue.trim() === "") {
      setError(true);
      setArrayOfChar(() => []);
      return;
    }
    setError(false);
    const convertedArray = convertStringToCharacterArray(
      inputValue.replace(/\s/g, "")
    );
    setArrayOfChar((prev) => (prev = convertedArray));
    setOriginalString((prev) => (prev = inputValue));
    navigate("/cards");
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Enter a string ( e.g abdcfs, ajkbsdchas )</h1>
      <InputBox
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {error && <p className="text-red-500">Enter a non-empty value</p>}
      <CTAButton
        type="submit"
        onClick={handleSubmit}
        text="Submit"
        className="border-4"
      />
    </div>
  );
};

export default Homepage;

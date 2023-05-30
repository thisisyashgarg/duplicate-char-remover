import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import CharacterDataContext from "../context/DataContext";
import Error from "../components/Error";
import CTAButton from "../components/CTAButton";
import { useNavigate } from "react-router-dom";

const AllCards = () => {
  const { arrayOfChar, originalString, setArrayOfChar } =
    useContext(CharacterDataContext);
  const navigate = useNavigate();

  function handleClick() {
    setArrayOfChar(() => []);
    navigate("/");
  }
  return arrayOfChar.length === 0 ? (
    <Error />
  ) : (
    <>
      <CTAButton text="Go Back to Homepage" onClick={handleClick} />
      <h1>Original String : {originalString}</h1>
      <div className="flex flex-wrap">
        {arrayOfChar.map((char, index) => {
          return <Card key={`${index}${char}`} char={char} />;
        })}
      </div>
    </>
  );
};

export default AllCards;

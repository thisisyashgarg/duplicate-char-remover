import React from "react";
import InputBox from "../components/InputBox";
import CTAButton from "../components/CTAButton";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  function handleSubmit() {
    const navigate = useNavigate();
    navigate("/cards");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <InputBox />
        <CTAButton type="submit" />
      </div>
    </form>
  );
};

export default Homepage;

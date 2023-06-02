import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ERROR_SVG } from "../constants";

const Error = () => {
  const navigate = useNavigate();

  // Navigating to homepage in case of error
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <img src={ERROR_SVG} alt="error" className="w-80 h-80" />
      <h1 className="font-extrabold text-black-700 text-2xl m-4 text-center ">
        Unauthorized Access, redirecting you to Homepage...
      </h1>
    </div>
  );
};

export default Error;

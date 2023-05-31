import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <h1 className="text-red-700">
      Unauthorized Access, redirecting you to Homepage...
    </h1>
  );
};

export default Error;

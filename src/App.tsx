import React from "react";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import CharacterDataContext from "./context/DataContext";

const App = () => {
  const [arrayOfChar, setArrayOfChar] = useState<string[]>([]);
  const [originalString, setOriginalString] = useState<string>("");

  return (
    <CharacterDataContext.Provider
      value={{ arrayOfChar, setArrayOfChar, originalString, setOriginalString }}
    >
      <RouterProvider router={router} />
    </CharacterDataContext.Provider>
  );
};

export default App;

import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import CharacterDataContext from "./context/DataContext";
import router from "./router/router";
import DataContextProvider from "./context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  );
};

export default App;

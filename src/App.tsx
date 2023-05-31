import React from "react";
import { RouterProvider } from "react-router-dom";
import DataContextProvider from "./context/DataContext";
import router from "./router/router";

const App = () => {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  );
};

export default App;

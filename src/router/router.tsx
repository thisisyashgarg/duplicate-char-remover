import React from "react";
import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import AllCards from "../pages/AllCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/cards",
    element: <AllCards />,
  },
]);
export default router;

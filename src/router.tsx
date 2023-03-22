import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "search/",
    element: <div>helloooo</div>
  }
]);

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
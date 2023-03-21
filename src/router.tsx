import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
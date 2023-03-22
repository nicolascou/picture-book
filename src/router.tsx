import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/home/Home";
import Search from './components/search/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "search/",
    element: <Search />
  }
]);

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
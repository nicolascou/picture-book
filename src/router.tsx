import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/home/Home";
import Search from './components/search/Search';
import Favorites from './components/favs/Favorites';

const router = createBrowserRouter([
  {
    path: "picture-book/",
    element: <Home />,
  },
  {
    path: "picture-book/search",
    element: <Search />
  },
  {
    path: "picture-book/my-photos",
    element: <Favorites />
  }
]);

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;
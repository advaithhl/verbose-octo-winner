import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components/layouts/home";
import { HomePage } from "../components/pages/home";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

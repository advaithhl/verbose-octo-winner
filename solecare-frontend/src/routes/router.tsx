import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components/layouts/home";
import { HomePage } from "../components/pages/home";
import LoginPage from "../components/pages/login";
import RegisterPage from "../components/pages/register";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components/layouts/home";
import { HomePage } from "../components/pages/home";
import LoginPage from "../components/pages/login";
import RegisterPage from "../components/pages/register";
import PatientDashboard from "../components/pages/patient/dashboard";
import AssignDoctorPage from "../components/pages/patient/doctor";
import DoctorDashboard from "../components/pages/doctor/dashboard";
import PatientListPage from "../components/pages/doctor/patients";
import PatientDetailPage from "../components/pages/doctor/patient-detail";

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
      },
      {
        path: "/patient",
        children: [
          {
            path: "",
            element: <PatientDashboard />,
          },
          {
            path: "doctor",
            element: <AssignDoctorPage />,
          },
        ],
      },
      {
        path: "/doctor",
        children: [
          {
            path: "",
            element: <DoctorDashboard />,
          },
          {
            path: "patients",
            element: <PatientListPage />,
          },
          {
            path: "patients/:patientId",
            element: <PatientDetailPage />,
          },
        ],
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components/layouts/home";
import LoginPage from "../components/pages/auth/login";
import RegisterPage from "../components/pages/auth/register";
import PatientDashboard from "../components/pages/patient/dashboard";
import AssignDoctorPage from "../components/pages/patient/doctor";
import DoctorDashboard from "../components/pages/doctor/dashboard";
import PatientListPage from "../components/pages/doctor/patients";
import PatientDetailPage from "../components/pages/doctor/patient-detail";
import AssignShoemakerPage from "../components/pages/patient/shoemaker";
import Welcome from "../components/Welcome";
import Questionnaire from "../components/Questionnaire";
import ThankYou from "../components/ThankYou";
import SettingsPage from "../components/pages/patient/settings-page";
import PatientProfile from "../components/pages/patient/patient-profile-page";
import Homepage from "../components/pages/home";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
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
          {
            path: "shoemaker",
            element: <AssignShoemakerPage />,
          },
          {
            path: "mos",
            element: <Welcome />,
          },
          {
            path: "mos/:part",
            element: <Questionnaire />,
          },
          {
            path: "mos/thank-you",
            element: <ThankYou />,
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
      {
        path: "/user-profile",
        children: [
          {
            path: "",
            element: <PatientProfile />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
]);

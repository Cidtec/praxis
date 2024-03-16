import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgotPassword from "../Auth/ForgotPassword";
import MobileNumberLogin from "../Auth/MobileNumberLogin";
import DefaultLayout from "../Layout/DefaultLayout";
import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import NotFound from "../Component/Pages/NotFound/NotFound";
import Instagram from "../Component/Pages/ExamenHemograma/ExamenHemograma";
import Amazon from "../Component/Pages/ExamenFisico/ExamenFisico";
import BookMyShow from "../Component/Pages/BookMyShow/BookMyShow";
import Whatsapp from "../Component/Pages/Whatsapp/Whatsapp";
import Person from "../Component/Pages/Person/Person";
import ExamenHemograma from "../Component/Pages/ExamenHemograma/ExamenHemograma";
import ExamenFisico from "../Component/Pages/ExamenFisico/ExamenFisico";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "phone-login",
        element: <MobileNumberLogin />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "examenHemograma",
        element: <ExamenHemograma />,
      },
      {
        path: "examenFisico",
        element: <ExamenFisico />,
      },
      {
        path: "bookmyshow",
        element: <BookMyShow />,
      },
      {
        path: "whatsapp",
        element: <Whatsapp />,
      },
      {
        path: "titular",
        element: <Person />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;

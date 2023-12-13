import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Services from "../Pages/Services";
import SIgnUp from "../Pages/SIgnUp";
import ServiceDetails from "../Pages/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage";
// import AddService from "../Pages/AddService";
import PrivateRoute from "./PrivateRoute";

import ManageService from "../Pages/MyService";
import AddService from "../Pages/AddService";
import MySchedule from "../Pages/MySchedule";
import UpdateProduct from "../Components/Update";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "Sign-up",
        element: <SIgnUp></SIgnUp>,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "About",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: <Services></Services>,
        //  loader: () => { fetch(`http://localhost:5000/services`)}
      },
      {
        path: "service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/services/${params.id}`
          );
        },
      },
      {
        path: "add_service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "my_schedule",
        element: (
          <PrivateRoute>
            <MySchedule></MySchedule>
          </PrivateRoute>
        ),
      },
      {
        path: "manage_service",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "UpdateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/services/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Services from "../Pages/Services";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'home',
            element:<Home></Home>
        },
      {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'About',
          element:<About></About>
        },{
          path:'services',
          element:<Services></Services>
        }
      
      ]
    },
  ]);

export default Router;
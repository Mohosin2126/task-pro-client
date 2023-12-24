import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../Dashboard/AddTask/AddTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>, 
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard/createnewtask",
          element:<AddTask></AddTask>
        }
      ]
    }
  ]);
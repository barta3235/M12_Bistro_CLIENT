import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SecretTest from "../pages/secretTest/SecretTest";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path: 'order',
          element:<Order></Order>
        },
        {
          path: 'order/:category',
          element:<Order></Order>
        },

        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><SecretTest></SecretTest></PrivateRoute>
        }
      ]
    },

    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
          {
            path:'cart',
            element:<Cart></Cart>
          }
      ]
    }
  ]);


export default router;
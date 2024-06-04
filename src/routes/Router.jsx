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
import AllUsers from "../pages/Dashboard/Cart/allUsers/AllUsers";
import AddItems from "../pages/Dashboard/addItems/AddItems";
import AdminRoute from '../routes/AdminRoute'
import ManageItems from "../pages/Dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/updateItem/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/userHome/UserHome";
import AdminHome from "../pages/Dashboard/adminHome/AdminHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order',
        element: <Order></Order>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><SecretTest></SecretTest></PrivateRoute>
      }
    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      //admin only routes
      {
         path:'adminHome',
         element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);


export default router;
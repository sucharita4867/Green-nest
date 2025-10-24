import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import HomePlants from "../Pages/HomePlants";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/Signin";
import AuthLayout from "../Layout/AuthLayout";
import DetailsContainer from "../Pages/DetailsContainer";
import PrivateRoute from "../Provider/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: <Plants />,
        // loader: () => fetch("/plants.json").then((res) => res.json()),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <p>authentication layout</p>,
  },
  {
    path: "/*",
    element: <h2>error 404 layout</h2>,
  },
  {
    path: "/card-details/:id",
    element: (
      <PrivateRoute>
        <DetailsContainer></DetailsContainer>
      </PrivateRoute>
    ),
    loader: () => fetch("/Plants.Json"),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);
export default router;

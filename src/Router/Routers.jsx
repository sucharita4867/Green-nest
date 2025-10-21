import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";

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
        element: <Plants></Plants>,
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
]);
export default router;

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
// import NotFound from "../pages/static/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  //   {
  //     path: "*",
  //     element: <NotFound />, // Optional 404 page
  //   },
]);

export default routes;

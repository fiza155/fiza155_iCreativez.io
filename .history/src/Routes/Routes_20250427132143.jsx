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
  {
    path: "*",
    element: <h2>Page Not Found</h2>,
  },
]);

export default routes;

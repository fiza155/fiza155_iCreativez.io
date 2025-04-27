import React from "react";
import routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />} />
      <Route path="/" index={true} element={<HomeScreen />} />
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

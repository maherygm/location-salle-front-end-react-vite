/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./config/routes/RoutesConfig";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "aos/dist/aos.css";
import "./__index.scss";
// import { config } from "dotenv";
// Charger les variables d'environnement
// config();
// const apiUrl = import.meta.env.REACT_APP_API_KEY;
// console.log(apiUrl);
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  </React.StrictMode>
);

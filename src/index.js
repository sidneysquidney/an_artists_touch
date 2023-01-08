import React from "react";
import ReactDOM from "react-dom/client";
// import { useHistory } from "react-router-dom";
import "./index.css";
import App from "./App";
// uncomment to include bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

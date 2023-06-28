import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/clients";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './app.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (navigator.userAgent.indexOf("iPhone") > -1) {
  document
    .querySelector("[name=viewport]")
    .setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=1"
    );
}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

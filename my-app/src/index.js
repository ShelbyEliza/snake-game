import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TitleBar from "./components/TitleBar";
ReactDOM.render(
  <React.StrictMode>
    <TitleBar></TitleBar>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

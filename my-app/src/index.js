import React from "react";
import ReactDOM from "react-dom";
import { StatusProvider } from "./context/StatusContext";

import "./index.css";
import App from "./App";
import TitleBar from "./components/TitleBar";

ReactDOM.render(
  <React.StrictMode>
    <StatusProvider>
      <TitleBar></TitleBar>
      <App />
    </StatusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

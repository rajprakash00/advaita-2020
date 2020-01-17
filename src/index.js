import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.render(
  <BrowserRouter>
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

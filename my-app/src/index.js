import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import "../../my-app/src/css/final.css"
import { DataProvider } from "./context/data/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import "../../my-app/src/css/final.css"
import { DataProvider } from "./store/data/DataContext";
import { FilterProvider } from "./store/data/FilterContext";
import { AuthProvider } from "./store/data/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <FilterProvider>
    <DataProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DataProvider>
    </FilterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

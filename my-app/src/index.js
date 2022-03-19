import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import "../../my-app/src/css/final.css"
import { DataProvider } from "./store/data/DataContext";
import { FilterProvider } from "./store/data/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    <DataProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </DataProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import "./css/final.css"
import { DataProvider } from "./store/data/DataContext";
import { FilterProvider } from "./store/data/FilterContext";
import { AuthProvider } from "./store/data/AuthContext";
import { CartProvider } from "./store/data/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <FilterProvider>
    <DataProvider>
    <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
    </DataProvider>
    </FilterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

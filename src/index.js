import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import "./css/final.css";
import { DataProvider } from "./store/data/DataContext";
import { FilterProvider } from "./store/data/FilterContext";
import { AuthProvider } from "./store/data/AuthContext";
import { CartProvider } from "./store/data/CartContext";
import { WishlistProvider } from "./store/data/WishlistContext";
import { OrderProvider } from "./store/data/OrderContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <AuthProvider>
        <FilterProvider>
          <DataProvider>
            <CartProvider>
              <WishlistProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </WishlistProvider>
            </CartProvider>
          </DataProvider>
        </FilterProvider>
      </AuthProvider>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

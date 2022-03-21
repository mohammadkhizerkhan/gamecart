import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import ProductListing from "./components/productpage/productlisting/ProductListing";
import Navbar from "./containers/home/Navbar";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import Login from './components/auth/Login'
import Mockman from "mockman-js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/carts" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;

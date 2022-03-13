import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Realme from "./Pages/Realme";
import Search from "./Pages/SearchProduct";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetail";
import { Checkout } from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Realme />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/search/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

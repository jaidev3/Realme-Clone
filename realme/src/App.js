import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Realme from "./Components/realme";
import Search from "./Components/Search";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetail";
import { Checkout } from "./Components/Checkout/Checkout";
import { Payment } from "./Components/Payment/Payment";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Realme />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/search/:id" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/LoginPage";
import Cart from "./Pages/CartPage";
import Footer from "./Components/Footer";
import Realme from "./Pages/RealmeHomePage";
import PaymentPage from "./Pages/PaymentPage";
import Search from "./Pages/SearchProductPage";
import Product from "./Components/ProductSectionHome";
import ProductDetails from "./Pages/SingleProductPage";
import { Checkout } from "./Pages/CheckoutPage";

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
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

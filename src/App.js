import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./contexts/CartContext";
import Header from "./component/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import News from "./pages/News";
import Footer from "./component/Footer";
// Import các component khác nếu cần

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products từ API hoặc local data
    // Ví dụ:
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    // Hoặc nếu sử dụng local data:
    // setProducts(localProductData);
  }, []);

  return (
    <Router>
      <CartProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <Header products={products} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/news" element={<News />} />
          {/* Thêm các route khác nếu cần */}
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

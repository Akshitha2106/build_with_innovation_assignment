import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import NotFound from "./Pages/NotFound.js";

import Navbar from "./components/Navbar.js";
import { CartProvider } from "./contexts/CartContext.js";
import Home from "./Pages/Home.js";
import ShoppingCart from "./ShoppingCart.js";
import Login from "./Pages/Login.jsx";
import { AuthProvider } from "./contexts/AuthContext.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

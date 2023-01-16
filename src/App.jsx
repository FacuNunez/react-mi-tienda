import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

import CartProvider from './Context/CartContext';





function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaid" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleid" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </>

  );
}

export default App;

import React from 'react'
import './App.css';

import Home from './components/Home.js'
import Header from './components/Header.js';
import ShoppingPage from './components/ShoppingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="ShoppingPage" element={<ShoppingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

import React from 'react'
import './App.css';
import Home from './components/Home.js'

import ShoppingPage from './components/ShoppingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Apishopping from './components/Apishopping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
          <Route path="/" >
            <Route path="LoginPage" index element={<LoginPage/>} />
            <Route path="ShoppingPage" element={<ShoppingPage />} />
            <Route path="Apishopping" element={<Apishopping/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

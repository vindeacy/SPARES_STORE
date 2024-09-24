import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegistrationPage from './pages/Registration.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/ProductDetails';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App

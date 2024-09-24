import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegistrationPage from './pages/Registration.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/ProductDetails';
import Footer from './constants/Footer.jsx';
import Header from './constants/Header.jsx';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App

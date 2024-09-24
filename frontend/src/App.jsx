import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./pages/ProductDetails.jsx"; // Corrected import
import Footer from "./constants/Footer.jsx";
import Header from "./constants/Header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default App;
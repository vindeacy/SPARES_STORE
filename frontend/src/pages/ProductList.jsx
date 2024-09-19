import React from "react";
import Header from "../components/Header.jsx";



function ProductList() {
    return (
        <div>
            {/* Add the Header component */}
            <Header />

            {/* Main content for product listing */}
            <div className="product-list">
                <div className="side-nav">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Shop</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <h2>Our Products</h2>
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductList;

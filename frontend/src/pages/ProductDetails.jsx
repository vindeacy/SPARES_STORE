import React, { useState } from "react";
import light from '../images/light.svg';
import filter from '../images/filter.svg';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrophy } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { IoHeadset } from "react-icons/io5";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Description');

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

    const relatedProducts = [
        { image: 'filter.svg', name: 'filter', price: 4000 },
        { image: 'plug.svg', name: 'plug', price: 3500 },
        { image: 'filter.svg', name: 'filter', price: 4000 },
        { image: 'plug.svg', name: 'plug', price: 3500 },
    ];

    const features = [
        { icon: <FaTrophy size={30} />, title: 'High Quality', description: 'crafted from top materials' },
        { icon: <BiCheckShield size={30} />, title: 'Warranty Protection', description: 'Over 2 years' },
        { icon: <BiShoppingBag size={30} />, title: 'Free Shipping', description: 'Order over 150 $' },
        { icon: <IoHeadset size={30} />, title: '24/7 Support', description: 'Dedicated support' }
    ];

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = "#e0e0e0";
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = "#f0f0f0";
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Container style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
                <a href="/" style={{ color: "#555", textDecoration: "none" }}>Home</a> &gt; 
                <a href="/shop" style={{ color: "#555", textDecoration: "none" }}>Shop</a> &gt; 
                <a href="/shop/toyota-headlights" style={{ color: "#555", textDecoration: "none" }}>Toyota Headlights</a>
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
                <Row>
                    <Col>
                        <img
                            src={light}
                            alt="Toyota Headlight"
                            style={{ width: "300px", height: "auto" }}
                        />
                    </Col>

                    <Col>
                        <h2 style={{ margin: "0 0 10px", color: "#333" }}>TOYOTA</h2>
                        <p style={{ fontSize: "18px", margin: "0 0 20px" }}>Tail light car LED system</p>
                        <div style={{ marginBottom: "10px" }}>
                            <span style={{ color: "#FFD700", fontSize: "20px" }}>★★★★★</span>
                            <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>5.0 (12 Reviews)</span>
                        </div>
                        <p style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>Ksh 5000</p>
                        <p style={{ fontSize: "14 px", color: "#555", lineHeight: "1.5" }}>
                            Enhance your driving visibility with our premium Car Headlight. Designed for optimal performance and safety...
                        </p>

                        <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
                            <button onClick={decreaseQuantity} style={quantityButtonStyle}>-</button>
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                style={{ textAlign: "center", width: "50px", fontSize: "16px", padding: "5px", margin: "0 10px" }}
                                aria-label="Product quantity"
                            />
                            <button onClick={increaseQuantity} style={quantityButtonStyle}>+</button>
                        </div>

                        <button style={addToCartButtonStyle}>Add to cart</button>
                    </Col>
                </Row>
            </div>

            <div style={{ marginTop: "30px", borderTop: "1px solid #ddd", paddingTop: "20px" }}>
            <div style={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
    {["Description", "Additional Information", "Reviews"].map((tab, index) => (
        <Link 
            key={index} 
            to={`/${tab.toLowerCase().replace(' ', '-')}`} 
            style={tabButtonStyle} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
        >
            {tab}
        </Link>
    ))}
</div>
                {activeTab === 'Description' && (
                    <div style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                        Enhance your driving visibility with our premium Car Headlight, designed for optimal performance and safety. This high-quality headlight offers bright, clear illumination, ensuring excellent road visibility even in low-light or harsh weather conditions. Built with durable materials, it features a long-lasting lifespan, energy efficiency, and easy installation. Compatible with a wide range of vehicle makes and models, it meets all safety and OEM standards.

                        Whether you're upgrading or replacing your headlight, this is the perfect solution for clear, reliable lighting on every journey.
                    </div>
                )}
                {activeTab === 'Additional Information' && (
                    <div style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                        Additional information about the product...
                    </div>
                )}
                {activeTab === 'Reviews' && (
                    <div style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                        Reviews about the product...
                    </div>
                )}
            </div>

            <div style={{ marginTop: "40px" }}>
                <h3 style={{ marginBottom: "20px", color: "#333" }}><b>Related Products</b></h3>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                    {relatedProducts.map((product, index) => (
                        <div key={index} style={{ flex: "1", maxWidth: "calc(25% - 20px)", textAlign: "center" }}>
                            <img 
                                src={filter} 
                                alt={filter.image || ""} 
                                style={{ width: "150px", height: "150px" }} 
                            />
                            <p style={{ margin: "10px 0", fontSize: "14px", color: "#333" }}>{product.name}</p>
                            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>Ksh{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={containerStyle}>
                {features.map((feature, index) => (
                    <div key={index} style={featureStyle}>
                        {feature.icon}
                        <p style={titleStyle}>{feature.title}</p>
                        <p style={descriptionStyle}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const quantityButtonStyle = {
    backgroundColor: "#ddd",
    border: "1px solid #ccc",
    padding: "5px 10px",
    fontSize: "18px",
    cursor: "pointer"
};

const addToCartButtonStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
};

const tabButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "#555",
    cursor: "pointer",
    paddingBottom: "10px",
    fontSize: "14px"
};

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px"
};

const featureStyle = {
    flex: "1",
    maxWidth: "calc(25% - 20px)",
    textAlign: "center"
};

const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
};

const descriptionStyle = {
    fontSize: "14px",
    color: "#555"
};

export default ProductDetails;
import React, { useState } from "react";
import light from '../images/light.svg';
import filter from '../images/filter.svg';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrophy } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { PiHeadset } from "react-icons/pi";


const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

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

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = "#e0e0e0";
    };
    
    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = "#f0f0f0";
    };
    const features = [
        { icon: <FaTrophy size={30} />, title: 'High Quality', description: 'crafted from top materials' },
        { icon: <BiCheckShield size={30} />, title: 'Warranty Protection', description: 'Over 2 years' },
        { icon: <BiSolidShoppingBags size={30} />, title: 'Free Shipping', description: 'Order over 150 $' },
        { icon: <PiHeadset size={30} />, title: '24/7 Support', description: 'Dedicated support' }
      ];

      


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
                        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
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
                <button 
                    key={index} 
                    style={tabButtonStyle} 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}
                >
                    {tab}
                </button>
            ))}
        </div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                Enhance your driving visibility with our premium Car Headlight, designed for optimal performance and safety. This high-quality headlight offers bright, clear illumination, ensuring excellent road visibility even in low-light or harsh weather conditions. Built with durable materials, it features a long-lasting lifespan, energy efficiency, and easy installation. Compatible with a wide range of vehicle makes and models, it meets all safety and OEM standards.

                Whether you're upgrading or replacing your headlight, this is the perfect solution for clear, reliable lighting on every journey.
                </div>
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

const relatedProducts = [
    { image: "/path/to/air-filter.jpg", name: "Toyota Air Filter", price: "$235.00" },
    { image: "/path/to/air-filter2.jpg", name: "Toyota Air Filter II", price: "$235.00" },
    { image: "/path/to/air-filter3.jpg", name: "Toyota Air Filter III", price: "$235.00" }
];

const footerIcons = [
    { image: src={FaTrophy}, title: "High Quality" },
    { image: src={BiCheckShield}, title: "Warranty Protection" },
    { image: src={BiSolidShoppingBags}, title: "Free Shipping" },
    { image: src={FaTrophy}, title: "24/7 Support" }
];

export default ProductDetails;
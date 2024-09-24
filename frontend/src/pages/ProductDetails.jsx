import React, { useState } from "react";
import light from '../images/light.svg';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

    return (
        <Container style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
                <a href="/" style={{ color: "#555", textDecoration: "none" }}>Home</a> &gt; Shop &gt; Toyota Headlights
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
                        <p style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>$75.00</p>
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
                        <button key={index} style={tabButtonStyle}>{tab}</button>
                    ))}
                </div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
                    Enhance your driving visibility with our premium Car Headlight, designed for optimal performance and safety...
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <h3 style={{ marginBottom: "20px", color: "#333" }}>Related Products</h3>
                <div style={{ display: "flex", gap: "20px" }}>
                    {relatedProducts.map((product, index) => (
                        <div key={index} style={relatedProductStyle}>
                            <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px" }} />
                            <p style={{ margin: "10px 0", fontSize: "14px", color: "#333" }}>{product.name}</p>
                            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", padding: "20px 0", borderTop: "1px solid #ddd" }}>
                {footerIcons.map((icon, index) => (
                    <div key={index} style={footerIconStyle}>
                        <img src={icon.image} alt={icon.title} style={{ width: "50px", height: "50px" }} />
                        <p style={{ marginTop: "10px", fontSize: "12px", color: "#333" }}>{icon.title}</p>
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

const relatedProductStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
    width: "200px"
};

const footerIconStyle = {
    textAlign: "center"
};

// Ensure these paths are correct relative to your project structure
const relatedProducts = [
    { image: "/path/to/air-filter.jpg", name: "Toyota Air Filter", price: "$235.00" },
    { image: "/path/to/air-filter2.jpg", name: "Toyota Air Filter II", price: "$235.00" },
    { image: "/path/to/air-filter3.jpg", name: "Toyota Air Filter III", price: "$235.00" }
];

const footerIcons = [
    { image: "/path/to/high-quality-icon.png", title: "High Quality" },
    { image: "/path/to/warranty-icon.png", title: "Warranty Protection" },
    { image: "/path/to/free-shipping-icon.png", title: "Free Shipping" },
    { image: "/path/to/support-icon.png", title: "24/7 Support" }
];

export default ProductDetails;
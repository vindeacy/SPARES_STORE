import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../images/logo.svg';
import { LuCopyright } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="footer-container" style={{backgroundColor: '#000000', marginTop: '20px'}}>
        <Row>
          <Col md={3} className="footer-section">
            <img
              src={logo}
              alt="My Spares Guy Logo"
              className="footer-logo"
            />
            <p><b>My Spares Guy</b></p>
            <p>1234, Nairobi</p>
          </Col>
          <Col md={2} className="footer-section">
    <h5 className="footer-title" style={{color: 'FFFFFF'}}>Top Cities</h5>
    <div className="footer-list">
        <div>Kenya</div>
        <div>Rwanda</div>
        <div>Uganda</div>
        <div>Tanzania</div>
    </div>
</Col>
<Col md={2} className="footer-section">
    <h5 className="footer-title" style={{color: '#DAA520'}}>Quick Links</h5>
    <div className="footer-list">
        <div><a href="/about" className="footer-link" style={{color: 'white', textDecoration: 'none'}}>About</a></div>
        <div><a href="/" className="footer-link" style={{color: 'white', textDecoration: 'none'}}>Home</a></div>
        <div><a href="/faq" className="footer-link" style={{color: 'white', textDecoration: 'none'}}>FAQ</a></div>
        <div><a href="/contact" className="footer-link" style={{color: 'white', textDecoration: 'none'}}>Contact Us</a></div>
    </div>
</Col>
          <Col md={3} className="footer-section">
            <h5 className="footer-title" style={{color: '#DAA520'}}> Subscribe to newsletter</h5>
            <p>Get $10 off your first order. Stay updated with our latest.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Email..."
                className="me-2 footer-input"
              />
              <Button variant="light" className="footer-button">
                <i className="bi bi-arrow-right"></i>
              </Button>
            </Form>
          </Col>
          <Col md={2} className="footer-section">
            <h5 className="footer-title" style={{color: '#DAA520'}}>Contact Us</h5>
            <p>+254789478690</p>
            <p>apbcafrica@gmail.com</p>
          </Col>
        </Row>
        <Row className="footer-bottom">
            <div>
                <Row className="text-center">
                    <p><LuCopyright />2024 My Spares Guy. All rights reserved.</p>
                    <p style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a> |{' '}
                        <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</a> |{' '}
                        <a href="/accessibility" style={{ color: 'white', textDecoration: 'none' }}>Accessibility</a>
                    </p>
                </Row>
            </div>
        </Row>
      </Container>
    </footer>
  );
};


export default Footer;



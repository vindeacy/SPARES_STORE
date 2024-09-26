import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginAsync } from '../features/auth/authslice'; // Import login action
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Frame from '../images/Frame.svg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginAsync({ email, password })).unwrap(); // Dispatch login action
      navigate('/dashboard'); // Redirect on successful login
    } catch (error) {
      console.error("Login failed:", error); // Handle login error
    }
  };

  return (
    <Container fluid className="vh-100" style={{ backgroundColor: '#88293b' }}>
      <Row className="h-100">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img 
            src={Frame} 
            alt="Frame" 
            className="img-fluid" 
            style={{ transition: 'all 0.3s ease', maxWidth: '80%' }} 
          />
        </Col>

        <Col md={6} className="d-flex flex-column justify-content-center px-5">
          <h1 className="mb-3">Welcome Back!</h1>
          <p>Please enter your credentials below</p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3" 
              style={{ backgroundColor: '#88293b' }}>
              Login
            </Button>
            <Link to="/forgot-password" className="text-danger">Forgot password?</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
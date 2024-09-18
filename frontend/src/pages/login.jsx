import React, { useState } from 'react';
import { actions } from '../features/auth/authslice.js';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Frame from '../images/Frame.svg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(actions.register({ name, email, password }));
  };

  return (
    <Container fluid className="vh-100" style={{ backgroundColor: '#88293b' }}>
    <Row className="h-100">
      {/* Left Column: Image */}
      <Col md={6} className="d-flex justify-content-center align-items-center">
        <img 
          src={Frame} 
          alt="Frame" 
          className="img-fluid" 
          style={{ transition: 'all 0.3s ease', maxWidth: '80%' }} 
        />
      </Col>

      {/* Right Column: Login Form */}
      <Col md={6} className="d-flex flex-column justify-content-center px-5">
        <h1 className="mb-3">Welcome Back!!</h1>
        <p>Please enter your details below</p>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email or phone number</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3" 
           style={{ backgroundColor: '#88293b' }}>
            Login
          </Button>
          <Link to="/register" className="text-danger">Forgot password?</Link>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default LoginPage;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../features/auth/authslice.js';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch registration action (you'll need to implement this in your slice)
    dispatch(actions.register({ name, email, password }));
  };

  return (
    <Container fluid>
      <Row>
        {/* Left Column - Image */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img 
            src="path_to_your_image.jpg" 
            alt="E-commerce" 
            className="img-fluid" 
            style={{ maxHeight: '100%', maxWidth: '100%' }} 
          />
        </Col>

        {/* Right Column - Registration Form */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Form>
            <h3>Create an account</h3>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" variant="primary">
                Sign Up
              </Button>
            </div>
            <p className="forgot-password text-right">
              Already registered? <a href="/sign-in">Sign in?</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
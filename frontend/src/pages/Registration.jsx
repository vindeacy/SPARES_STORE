import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../features/auth/authslice.js';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Frame from '../images/Frame.svg';
import IconGoogle from '../images/IconGoogle.svg'

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
    <Container fluid className="vh-100" style={{ backgroundColor: '#88293b' }}>
      <Row className="h-100">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={Frame}
            alt="Frame"
            className="img-fluid"
            style={{ transition: 'all 0.3s ease', maxWidth: '80%', height: 'auto' }}
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Card className="p-4 w-100">
            <Card.Title className="text-center">Register</Card.Title>
            <Form >
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button type="submit" className="mt-3 w-100"
                style={{ backgroundColor: '#88293b' }} >
                <img
                  src={IconGoogle}
                  alt="IconGoogle"
                  className="img-fluid"
                  style={{ transition: 'all 0.3s ease', maxWidth: '80%', height: 'auto', marginRight: '8px' }}
                />
                Sign Up With Google
              </Button>

              <Button type="submit" className="mt-3 w-100"
                style={{ backgroundColor: '#88293b' }} >
                Create Account
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
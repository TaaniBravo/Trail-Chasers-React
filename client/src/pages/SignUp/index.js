import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container className="form__wrapper">
      <h1>Sign Up for an Account!</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "1em" }}>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;

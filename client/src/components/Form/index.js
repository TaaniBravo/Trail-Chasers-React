import React from "react";
import { Form as BootstrapForm, Button } from "react-bootstrap";

const Form = () => {
  return (
    <BootstrapForm>
      <BootstrapForm.Group className="mb-3" controlId="BootstrapFormBasicEmail">
        <BootstrapForm.Label>Email address</BootstrapForm.Label>
        <BootstrapForm.Control type="email" placeholder="Enter email" />
        <BootstrapForm.Text className="text-muted">
          We'll never share your email with anyone else.
        </BootstrapForm.Text>
      </BootstrapForm.Group>

      <BootstrapForm.Group
        className="mb-3"
        controlId="BootstrapFormBasicPassword"
      >
        <BootstrapForm.Label>Password</BootstrapForm.Label>
        <BootstrapForm.Control type="password" placeholder="Password" />
      </BootstrapForm.Group>
      <BootstrapForm.Group
        className="mb-3"
        controlId="BootstrapFormBasicCheckbox"
      >
        {/* Future use add a check box for remembering login. */}
        {/* <BootstrapForm.Check type="checkbox" label="Check me out" /> */}
      </BootstrapForm.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </BootstrapForm>
  );
};

export default Form;

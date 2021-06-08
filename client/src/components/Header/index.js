import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Brand id="navbar__branding" href="/home">
          Trail Chasers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", width: "100%" }}
            navbarScroll
          >
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

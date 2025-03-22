import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/images/go-nom-nom-logo.svg";
const navs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo / Brand Name */}
        <Navbar.Brand href="/">
          <img src={logo} />
          <h1>Go Nom Nom</h1>
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navs.map((nav) => (
              <Nav.Link href={`/${nav.toLowerCase().replace(" ", "-")}`}>
                {nav}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

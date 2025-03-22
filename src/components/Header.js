import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/images/go-nom-nom-logo.svg";
const navs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
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
            {navs.map((nav, index) => (
              <Nav.Link
                key={index}
                href={`/${nav.toLowerCase().replace(" ", "-")}`}
              >
                {nav}
              </Nav.Link>
            ))}
            <Nav.Item>
              <Button
                className="login"
                variant="primary"
                size="sm"
                onClick={() => {
                  "login" === buttonName.toLowerCase()
                    ? setButtonName("Logout")
                    : setButtonName("Login");
                }}
              >
                {buttonName}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

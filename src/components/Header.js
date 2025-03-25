import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/images/go-nom-nom-logo.svg";
import { Link } from "react-router";
const navs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  console.log("Header rendered");

  // If not dependency array ==> useEffect is called on every render
  // If dependency array is empty ==> useEffect is called on initial render once.
  // If dependency array is [buttonName] ==> useEffect is called on initial render and everytime btnName is updated.
  useEffect(() => {
    console.log("uesEffect called");
  }, [buttonName]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo / Brand Name */}
        <Link to="/" className="navbar-brand">
          {/* <img src={logo} /> */}
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              strokeWidth="3"
              fill="red"
            />
          </svg>
          <h1>Go Nom Nom</h1>
        </Link>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navs.map((nav, index) => (
              <Link
                key={index}
                to={`/${nav
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("home", "")}`}
              >
                {nav}
              </Link>
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

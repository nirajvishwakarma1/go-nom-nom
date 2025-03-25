import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-dark text-light py-3">
    <Container>
      <Row>
        <Col md={6} className="text-center text-md-start">
          <p>
            ©️ {new Date().getFullYear()}{" "}
            <Link className="footer-logo-anchor" to="/">
              Go Nom Nom
            </Link>
            . All rights reserved
          </p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          <Link to="/privacy" className="text-light me-3">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-light me-3">
            Terms & Conditons
          </Link>
          <Link to="/test" className="text-light me-3">
            Test
          </Link>
          <Link to="/cc1" className="text-light me-3">
            cc1
          </Link>
          <Link to="/cc2" className="text-light me-3">
            cc2
          </Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

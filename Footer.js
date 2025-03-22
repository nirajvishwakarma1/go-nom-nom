import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-3">
    <Container>
      <Row>
        <Col md={6} className="text-center text-md-start">
          <p>©️ {new Date().getFullYear()} Go Nom Nom. All rights reserved</p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          <a href="/privacy" className="text-light me-3">
            Privacy Policy
          </a>
          <a href="/terms" className="text-light">
            Terms & Conditons
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

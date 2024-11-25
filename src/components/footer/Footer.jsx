// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={4} className="footer-section">
            <p>&copy; 2024 Arsen Valeev. All Rights Reserved.</p>
            <p>🤍 Made with love and cup of tea.</p>
          </Col>
          {/* <Col xs={12} md={4} className="footer-section text-center">
            <p>
              <a href="/work" className="footer-link">Work</a> |{" "}
              <a href="/info" className="footer-link">Info</a>
            </p>
          </Col> */}
          <Col xs={12} md={4} className="footer-section text-lg-end">
            <a
              href="https://www.linkedin.com/in/arsen-valeev-aa92442ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaEnvelope />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
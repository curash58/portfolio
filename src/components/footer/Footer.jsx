// Footer.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="custom-footer">
      <Container>
        <Row className="justify-content-between align-items-center">
        <Col xs={12} md={4} className="footer-section d-flex align-items-center">
            <div>
              <p>&copy; 2024 Arsen Valeev. All Rights Reserved.</p>
              <div className="d-flex align-items-center">
                <p className="me-3">🤍 Made with love and cup of tea.</p>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={scrollToTop}
                  className="mb-3"
                >
                  Up
                </Button>
              </div>
            </div>
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
              href="mailto:varsen2302@gmail.com"
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
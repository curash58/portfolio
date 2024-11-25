import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import Switcher from "./Switcher.jsx"; // Import the Switcher component
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Container className="d-flex align-items-center">
        {/* Left-side brand */}
        <Navbar.Brand href="#" className="navbar-brand d-none d-lg-block">
          Arsen Valeev
        </Navbar.Brand>

        {/* Center Switcher */}
        <div className="switcher-container">
          <Switcher />
        </div>

        {/* Right-side icons */}
        <div className="navbar-icons">
          <a
            href="https://www.linkedin.com/in/arsen-valeev-aa92442ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button linkedin"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/path/to/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <FaDownload size={20} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
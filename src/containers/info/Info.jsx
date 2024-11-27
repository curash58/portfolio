import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./Info.css";

const Info = () => {
  const [activeSection, setActiveSection] = useState("For everyone");
  const [activeMenu, setActiveMenu] = useState("intro");
  const [scrambledText, setScrambledText] = useState("");

  const sections = {
    intro: useRef(null),
    work: useRef(null),
    values: useRef(null),
    background: useRef(null),
    references: useRef(null),
    contact: useRef(null),
  };

  const content = {
    "For everyone":
      "Hdwadwwello there, I'm a designer who cares about making beautiful things that help people.",
    Recruiters:
      "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of.",
    Engineers:
      "I take pride in my craft, and love mentoring earlier career designers. I develop cross-functional partnerships, and thrive in complex, ambiguous environments.",
  };

  // Scrambling animation logic for the text
  useEffect(() => {
    const originalText = content[activeSection];
    const scrambleDuration = 3500; // Duration for the animation in milliseconds
    const intervalDelay = 50; // Delay between each iteration
    let scrambled = Array(originalText.length)
      .fill("")
      .map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94)))
      .join("");
    let iterations = 0;
    const totalIterations = scrambleDuration / intervalDelay;

    const scrambleInterval = setInterval(() => {
      scrambled = scrambled
        .split("")
        .map((char, index) =>
          iterations / totalIterations > index / originalText.length
            ? originalText[index]
            : String.fromCharCode(33 + Math.floor(Math.random() * 94))
        )
        .join("");

      setScrambledText(scrambled);

      if (iterations >= totalIterations) {
        clearInterval(scrambleInterval);
      }
      iterations++;
    }, intervalDelay);

    return () => clearInterval(scrambleInterval);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <Container>
      <Row>
        {/* Responsive Sidebar/Nav */}
        <Col md={3} className="info-sidebar d-none d-md-block">
          <Nav className="info-sidebar-nav flex-column">
            {Object.keys(sections).map((key) => (
              <Nav.Link
                key={key}
                href={`#${key}`}
                className={`info-nav-link ${
                  activeMenu === key ? "info-nav-active" : ""
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Collapsible Navbar for Mobile */}
        <Col xs={12} className="d-md-none mt-3">
            
          <Navbar expand="md" variant="dark" className="rounded-3 p-2">
            <Navbar.Toggle aria-controls="mobile-navbar" />
            <Navbar.Collapse id="mobile-navbar">
              <Nav className="flex-column">
                {Object.keys(sections).map((key) => (
                  <Nav.Link
                    key={key}
                    href={`#${key}`}
                    className={`info-nav-link ${
                      activeMenu === key ? "info-nav-active" : ""
                    }`}
                    onClick={() => setActiveMenu(key)}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>

        {/* Main Content */}
        <Col md={9} id="Content" className="info-content mt-4">
          {/* Tabs Selector */}
          <Nav variant="tabs" className="info-tabs mb-4">
            {Object.keys(content).map((key) => (
              <Nav.Item key={key} className="info-tab-item">
                <Nav.Link
                  className={`info-tab-link ${
                    activeSection === key ? "info-tab-active" : ""
                  }`}
                  onClick={() => setActiveSection(key)}
                >
                  {key}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Dynamic Content with Scrambled Animation */}
          <div className="info-dynamic-content">
            <h1 className="info-dynamic-text">{scrambledText}</h1>
          </div>

          {/* Sections for Scrolling */}
          <div id="intro" ref={sections.intro} className="info-section">
            <h2>Intro</h2>
            <p>Welcome to the intro section.</p>
          </div>
          <div id="work" ref={sections.work} className="info-section">
            <h2>Work</h2>
            <p>Details about work experience.</p>
          </div>
          <div id="values" ref={sections.values} className="info-section">
            <h2>Values</h2>
            <p>Core values and beliefs.</p>
          </div>
          <div
            id="background"
            ref={sections.background}
            className="info-section"
          >
            <h2>Background</h2>
            <p>Details about background and history.</p>
          </div>
          <div
            id="references"
            ref={sections.references}
            className="info-section"
          >
            <h2>References</h2>
            <p>References and testimonials.</p>
          </div>
          <div id="contact" ref={sections.contact} className="info-section">
            <h2>Contact</h2>
            <p>Contact information and details.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;

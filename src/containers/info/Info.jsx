import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./Info.css";
import "./CustomButton.css";

const CustomMenuButton = ({ isExpanded, onToggle }) => {
  return (
    <button
      aria-label="Menu"
      className="menuToggle"
      aria-expanded={isExpanded}
      aria-haspopup="true"
      onClick={onToggle}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

const Info = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for menu toggle
  const [activeSection, setActiveSection] = useState("For everyone");
  const [activeMenu, setActiveMenu] = useState("intro");
  const [scrambledText, setScrambledText] = useState("");

  const sections = {
    "About Me": useRef(null),
    "Programming Journey": useRef(null),
    "Professional Experience & Projects": useRef(null),
    "Hobbies & Inspirations": useRef(null),
    "Values & Life Philosophy": useRef(null),
    contact: useRef(null),
  };

  const content = {
    "For everyone":
      "Hello there, I’m student at Humber Polytechnic with a GPA of 92.3. Outside of academics, you’ll find me enjoying tennis, hiking, or brainstorming ideas.",
    Recruiters:
      "Excited to contribute to a Summer 2025 internship. With a solid technical foundation and experience in modern tools, I’m eager to grow, collaborate, and learn from experienced mentors.",
    Engineers:
      "Fluent in /frontend.logic && backend.expertise—built (real_time.apps) + (C++.algorithms) && (Java.structures).",
  };

  // Toggle menu visibility
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  // Close the menu automatically when clicking a link
  const handleLinkClick = (key) => {
    setActiveMenu(key); // Set the active menu item
    setIsExpanded(false); // Close the menu
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
        <Col xs={12} className="d-md-none mt-3 custom-menu-btn">
          <CustomMenuButton isExpanded={isExpanded} onToggle={handleToggle} />
          <Navbar.Collapse
            id="mobile-navbar"
            className={isExpanded ? "show" : ""}
          >
            <Nav className="flex-column">
              {Object.keys(sections).map((key) => (
                <Nav.Link
                  key={key}
                  href={`#${key}`}
                  className={`info-nav-link ${
                    activeMenu === key ? "info-nav-active" : ""
                  }`}
                  onClick={() => handleLinkClick(key)} // Close menu on link click
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
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
          <div
            id="about-me"
            ref={sections["About Me"]}
            className="info-section"
          >
            <h2>About Me</h2>
            <p>
              I’m a Computer Programming student at Humber Polytechnic, striving
              to grow as a developer while seeking a Summer 2025 internship.
              With a solid foundation in software development and a passion for
              learning, I’m excited to bring my technical skills and
              collaborative mindset to innovative projects.
            </p>
          </div>

          <div
            id="programming-journey"
            ref={sections["Programming Journey"]}
            className="info-section"
          >
            <h2>Programming Journey</h2>
            <p>
              My passion for programming started five years ago when I wrote my
              first program in C++ under the guidance of a tutor. I’ve since
              progressed through coding schools, tackled challenges on platforms
              like LeetCode, and explored advanced topics like AVL trees, linked
              lists, and design patterns.
            </p>
            <p>
              From crafting Minecraft server plugins in Java to creating
              Telegram bots in Python, I’ve built diverse skills. At Humber, I
              delved deeper into React, Java, SQL, and CI/CD tools like Jenkins,
              Postman, and AWS, continuously expanding my expertise.
            </p>
          </div>

          <div
            id="professional-experience-projects"
            ref={sections["Professional Experience & Projects"]}
            className="info-section"
          >
            <h2>Professional Experience & Projects</h2>
            <p>
              As a Peer Tutor at Humber Polytechnic, I’ve mentored students in
              various subjects, simplified complex concepts, and fostered
              problem-solving through practical examples. My role taught me the
              importance of patience, preparation, and adaptability.
            </p>
            <p>
              My projects include:
              <ul>
                <li>
                  <strong>Logistics Website:</strong> A responsive site with
                  Firebase-powered features, an admin panel, and email
                  subscription functionality.
                </li>
                <li>
                  <strong>Photography Portfolio:</strong> A dynamic website with
                  Firebase integration for photo management and category
                  updates, hosted for smooth performance.
                </li>
              </ul>
              You can explore more of my projects on the{" "}
              <strong>Work Page</strong>.
            </p>
          </div>

          <div
            id="hobbies-inspirations"
            ref={sections["Hobbies & Inspirations"]}
            className="info-section"
          >
            <h2>Hobbies & Inspirations</h2>
            <p>
              Tennis keeps me focused and physically active, while hiking
              inspires creative solutions and energizes me with nature’s beauty.
              I also enjoy chess, which hones my strategic thinking and
              decision-making skills—valuable traits for a developer.
            </p>
            <p>
              Outside of programming, I’m currently reading{" "}
              <em>The Richest Man in Babylon</em>, a book that fuels my
              perspective on personal growth and discipline.
            </p>
          </div>

          <div
            id="values-life-philosophy"
            ref={sections["Values & Life Philosophy"]}
            className="info-section"
          >
            <h2>Values & Life Philosophy</h2>
            <p>
              I believe in taking joy in life’s simple pleasures and embracing
              every day with gratitude. My guiding principle is:{" "}
              <em>"Not everything that works for you works for others."</em>{" "}
              This mindset drives my approach to collaboration, learning, and
              creating solutions that make a difference.
            </p>
          </div>

          <div id="contact" ref={sections.contact} className="info-section">
            <h2>Contact</h2>
            <p>
              Let’s build something amazing together! Reach me at{" "}
              <a href="mailto:varsen2302@gmail.com">varsen2302@gmail.com</a> or
              connect on{" "}
              <a
                href="https://www.linkedin.com/in/arsen-valeev-aa92442ba/"
                target="_blank"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;

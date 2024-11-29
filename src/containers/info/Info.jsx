import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Navbar, Carousel } from "react-bootstrap";
import "./Info.css";
import "./CustomButton.css";
import { Timeline } from "../../components";

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
  const [activeMenu, setActiveMenu] = useState("about-me");
  const [scrambledText, setScrambledText] = useState("");

  const sectionsName = [
    "About Me",
    "Programming Journey",
    "Professional Experience & Projects",
    "Hobbies & Inspirations",
    "Values & Life Philosophy",
    "Contact",
  ];

  const sections = {
    "about-me": useRef(null),
    "programming-journey": useRef(null),
    "professional-experience-projects": useRef(null),
    "hobbies-inspirations": useRef(null),
    "values-life-philosophy": useRef(null),
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
    const scrambleDuration = 1; // Duration for the animation in milliseconds
    const intervalDelay = 50; // Delay between each iteration
    const totalIterations = Math.floor(scrambleDuration / intervalDelay);

    let scrambled = originalText
      .split("")
      .map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94)))
      .join("");

    let iterations = 0;

    const scrambleInterval = setInterval(() => {
      scrambled = originalText
        .split("")
        .map((char, index) => {
          if (iterations / totalIterations > index / originalText.length) {
            return char; // Keep the original character if its turn is done
          } else if (char === " ") {
            return " "; // Maintain spaces as is
          } else {
            return String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Random character
          }
        })
        .join("");

      setScrambledText(scrambled);

      if (iterations >= totalIterations) {
        clearInterval(scrambleInterval);
        setScrambledText(originalText); // Ensure the final text is the original
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
      { root: null, threshold: 0.6 }
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
            {Object.keys(sections).map((key, index) => (
              <Nav.Link
                key={key}
                href={`#${key}`}
                className={`info-nav-link ${
                  activeMenu === key ? "info-nav-active" : ""
                }`}
              >
                {sectionsName[index]}
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
              {Object.keys(sections).map((key, index) => (
                <Nav.Link
                  key={key}
                  href={`#${key}`}
                  className={`info-nav-link ${
                    activeMenu === key ? "info-nav-active" : ""
                  }`}
                  onClick={() => handleLinkClick(key)} // Close menu on link click
                >
                  {sectionsName[index]}
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
            ref={sections["about-me"]}
            className="info-section"
          >
            <h2>About Me</h2>
            <Row>
              {/* Left Column: Carousel */}
              <Col md={6}>
                <div className="about-carousel">
                  <Carousel controls={false} indicators={false}>
                    {[
                      "./images/Info/4.jpg",
                      "./images/Info/5.jpg",
                      "./images/Info/1.jpg",
                      "./images/Info/2.jpg",
                      "./images/Info/3.jpg",
                    ].map((src, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100 rounded-4"
                          src={src}
                          alt={`Slide ${index + 1}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>

              {/* Right Column: Text */}
              <Col md={6}>
                <div className="about-text">
                  <p>
                    I am a Computer Programming student at Humber Polytechnic,
                    actively seeking a Summer 2025 internship where I can apply
                    my knowledge, contribute to meaningful projects, and grow as
                    a professional.
                  </p>
                  <p>
                    With a solid foundation in programming and a passion for
                    problem-solving, I’m ready to bring value to any team,
                    leveraging both technical skills and a drive for continuous
                    learning.
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div
            id="programming-journey"
            ref={sections["programming-journey"]}
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
            <div className="timeline-container">
              <Timeline />
            </div>
          </div>
          <div
            id="professional-experience-projects"
            ref={sections["professional-experience-projects"]}
            className="info-section"
          >
            <h2>Professional Experience & Projects</h2>
            <p>
              As a Peer Tutor at Humber Polytechnic, I’ve mentored students in
              various subjects, simplified complex concepts, and fostered
              problem-solving through practical examples. My role taught me the
              importance of patience, preparation, and adaptability.
            </p>
            <div>
              <p>My projects include:</p>
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
              <p>
                You can explore more of my projects on the{" "}
                <strong>Work Page</strong>.
              </p>
              <p>
                <strong>Technical Stack:</strong>
              </p>
              <ul>
                <li>
                  <strong>Programming:</strong> JavaScript, Java, C++, React,
                  Docker, AWS, Spring Boot, Tailwind CSS, HTML, CSS
                </li>
                <li>
                  <strong>Databases:</strong> SQL, Firebase, Appwrite
                </li>
                <li>
                  <strong>Tools:</strong> Git, GitHub, Jenkins, Postman
                </li>
              </ul>
            </div>
          </div>

          <div
            id="hobbies-inspirations"
            ref={sections["hobbies-inspirations"]}
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
            ref={sections["values-life-philosophy"]}
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

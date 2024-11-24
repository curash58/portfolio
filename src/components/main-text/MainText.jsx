import React from "react";
import { Container } from "react-bootstrap";
import "./MainText.css";

const MainText = () => {
  return (
    <Container className="main-text-wrapper text-center">
      {/* Frame Section */}
      <div className="window-frame">
        {/* Window Bar */}
        <div className="window-bar">
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-text-content">
          <h1 className="main-text">
            I craft <span className="highlight">products</span>, <br />
            interactions & <span className="highlight-serif">stories</span>.
          </h1>
          <p className="sub-text">
            Designer at Discord. Based in Toronto. <br />
            <span className="sub-text-formerly">
              Formerly at Google and RBC.
            </span>
          </p>
          <div className="down-arrow">↓</div>
        </div>
      </div>
    </Container>
  );
};

export default MainText;
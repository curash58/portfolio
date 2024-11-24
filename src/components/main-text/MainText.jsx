import React from "react";
import { Container } from "react-bootstrap";
import "./MainText.css";
import { TreeModel } from "../../components";

const MainText = () => {
  return (
    <Container className="main-text-wrapper">
      {/* Text content */}
      <div className="main-text-left">
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
      </div>

      {/* Tree model */}
      <div className="main-text-right">
        <TreeModel />
      </div>
    </Container>
  );
};

export default MainText;
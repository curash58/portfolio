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
        
          Hello there, {/* <span className="highlight">products</span> */}I'm web-developer, <br />
          and I love what I make.
        </h1>
        <p className="sub-text">
          Student 3 Semestr at Humber Polythecnic. Toronto ON. <br />
          <span className="sub-text-formerly">
            Peer tutor at Humber Polythecnic.
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
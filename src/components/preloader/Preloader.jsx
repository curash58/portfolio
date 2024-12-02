import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <pre className="preloader-text">
        <span className="highlight">class</span> 
        <span className="class-name"> Developer </span> {"{"}
        <br />
        &nbsp;&nbsp;<span className="highlight">public:</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="class-name">Developer</span>() {"{"}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="key">name</span> = <span className="string">"Aspiring Intern"</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="key">currentStatus</span> = <span className="string">"Computer Programming Student at Humber Polytechnic"</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="key">email</span> = <span className="string">"aspiring.intern@domain.com"</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
        <br />
        {"};"}
      </pre>
    </div>
  );
};

export default Preloader;
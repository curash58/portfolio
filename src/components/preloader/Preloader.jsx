import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <h1 className="preloader-text">
      {/* Arsen <span className="highlight">Valeev</span> is a... */}
      Cup of <span className="highlight">Tea</span> and 🍩.
      </h1>
    </div>
  );
};

export default Preloader;
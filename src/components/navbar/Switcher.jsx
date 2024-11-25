import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import React Router components
import "./Switcher.css";

const Switcher = () => {
  const location = useLocation(); // Get current location
  const active = location.pathname === "/" ? "Work" : "Info"; // Determine active page

  return (
    <div className="nav-pill">
      <div className="nav-toggle-container">
        {/* Work Link */}
        <Link
          to="/"
          className={`nav-toggle ${active === "Work" ? "active" : ""}`}
        >
          <div className="text-nav-toggle">Work</div>
        </Link>

        {/* Info Link */}
        <Link
          to="/info"
          className={`nav-toggle ${active === "Info" ? "active" : ""}`}
        >
          <div className="text-nav-toggle">Info</div>
        </Link>
        
        {/* Sliding Indicator */}
        <div
          className="nav-indicator-pill"
          style={{
            transform: active === "Work" ? "translateX(0)" : "translateX(100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Switcher;
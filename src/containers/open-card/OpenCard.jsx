import React from "react";
import "./OpenCard.css";

const OpenCard = ({ title, image, details, onClose }) => {
  // Handle outside click to close modal
  const handleOutsideClick = (e) => {
    if (e.target.className.includes("opencard-modal")) {
      onClose();
    }
  };

  return (
    <div className="opencard-modal" onClick={handleOutsideClick}>
      <div className="opencard-modal-content">
        <button className="opencard-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="opencard-content-wrapper">
          {/* Left side: Description */}
          <div className="opencard-description">
            <h2>{title}</h2>
            <p>{details}</p>
          </div>
          {/* Right side: Image */}
          <div className="opencard-image">
            <img src={image} alt={title} className="modal-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
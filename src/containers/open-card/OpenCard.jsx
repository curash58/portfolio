import React from "react";
import "./OpenCard.css"; // Import styles specific to OpenCard

const OpenCard = ({ onClose }) => {
  // Handle outside click to close the modal
  const handleOutsideClick = (e) => {
    if (e.target.className.includes("opencard-modal")) {
      onClose();
    }
  };

  return (
    <div className="opencard-modal" onClick={handleOutsideClick}>
      <div className="opencard-modal-content">
        <button className="opencard-close-button" onClick={onClose}>
          &times; {/* Close icon */}
        </button>
        <h2>Card Details</h2>
        <p>This is the detailed content of the card.</p>
      </div>
    </div>
  );
};

export default OpenCard;
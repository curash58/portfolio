import React, { useState } from 'react';
import './Card.css'; // Import unique styles for Card
import {OpenCard} from "../../containers";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Function to handle opening the modal
  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false); // Reset the closing state
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(() => {
      setIsOpen(false); // Remove modal after animation ends
    }, 400); // Match the animation duration
  };

  return (
    <div>
      {/* Card element */}
      <div className="card-container" onClick={handleOpen}>
        <h3 className="card-title">Card Title</h3>
        <p className="card-description">Click to open the card details</p>
      </div>

      {/* Render modal if open */}
      {isOpen && (
        <div className={`opencard-modal ${isClosing ? "closing" : ""}`}>
          <OpenCard onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Card;
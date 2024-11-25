import React, { useState, useEffect } from "react";
import "./Card.css";
import { Modal } from "react-bootstrap";

const Card = ({ title, description, image }) => {
  // State for the dynamic width of the card
  const [cardWidth, setCardWidth] = useState("auto");

  // State for modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const updateCardWidth = () => {
      // Find the target element to calculate its content width
      const targetElement = document.querySelector('.main-text-wrapper.container');
      if (targetElement) {
        // Get the computed styles of the element
        const computedStyle = getComputedStyle(targetElement);
  
        // Extract the content width (without padding)
        const contentWidth = parseFloat(computedStyle.width);
  
        console.log(contentWidth-120); // Debugging: log the width without padding
        setCardWidth(`${contentWidth-120}px`); // Set the width dynamically
      }
    };
  

    updateCardWidth(); // Set initial width on mount
    window.addEventListener("resize", updateCardWidth); // Update width on window resize

    return () => {
      window.removeEventListener("resize", updateCardWidth); // Cleanup event listener on unmount
    };
  }, []); // Run only once on component mount/unmount

  return (
    <div className="card-container" style={{ width: cardWidth }}>
      {/* Card content */}
      <div className="card-content" onClick={handleOpen}>
        <div className="card-image">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={isOpen}
        onHide={handleClose}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt={title} className="img-fluid mb-3" />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-light" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Card;
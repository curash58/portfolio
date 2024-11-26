import React, { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./Card.css";

const Card = ({ title, description, imageUrls, projectLink }) => {

  console.log(projectLink)
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
      const targetElement = document.querySelector(
        ".main-text-wrapper.container"
      );
      if (targetElement) {
        const computedStyle = getComputedStyle(targetElement);
        const contentWidth = parseFloat(computedStyle.width);
        setCardWidth(`${(contentWidth - 120) / 2}px`);
      }
    };

    updateCardWidth(); // Set initial width on mount
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  return (
    <div className="card-container" style={{ width: cardWidth }}>
      {/* Card content */}
      <div className="card-content" onClick={handleOpen}>
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description text-truncate">{description}</p>
        </div>
        <div className="card-image">
          <img src={imageUrls[0]} alt={title} className="img-fluid" />
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={isOpen}
        onHide={handleClose}
        centered
        className="custom-modal"
      >
        <Modal.Body>
          <div className="d-flex align-items-center">
            {/* Left side: Carousel */}
            <div className="modal-carousel-container me-lg-3">
              <Carousel>
                {imageUrls.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={url}
                      alt={`Slide ${index}`}
                      className="d-block w-100"
                      style={{
                        borderRadius: "12px",
                        maxHeight: "500px",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className="d-flex flex-column">
              {/* Right side: Text */}
              <div
                className="modal-text-container"
                style={{ overflowY: "auto", maxHeight: "400px" }}
              >
                <h3>{title}{" "}
                {projectLink && (
                  <a
                  // добавить сюда иконки глаз анимированных смотрящих на ссылку типо глянь проект или как то так
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{ fontSize: "0.9rem", marginLeft: "10px", color: "white" }}
                  >
                    (View Project)
                  </a>
                )}</h3>
                <p>{description}</p>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-outline-light" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Card;

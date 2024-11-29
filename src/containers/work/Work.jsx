import React from "react";
import "./Work.css";
import { Card, MainText } from "../../components";
import { Container } from "react-bootstrap";

const Work = () => {
  const cardsData = [
    {
      title: "Cargo",
      description:
        "Developed website for Cargo company implementing Admin panel",
      imageUrls: [
        "/images/Cargo/1.png",
        "/images/Cargo/2.png",
        "/images/Cargo/4.png",
        "/images/Cargo/5.png",
        "/images/Cargo/6.png",
      ],
      projectLink: "https://test.test.crabdance.com",
    },
    {
      title: "Photograph",
      description:
        "Developed website for Cargo company implementing Admin panel",
      imageUrls: [
        "/images/Photographer/1.png",
        "/images/Photographer/2.png",
        "/images/Photographer/3.png",
        "/images/Photographer/4.png",
        "/images/Photographer/5.png",
        "/images/Photographer/6.png",
      ],
      projectLink: "https://ph.poliiiiiiiiina.crabdance.com",
    },
  ];

  return (
    <div>
      <MainText />
      <Container className="work-cards-container">
        <div className="work-cards">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrls={card.imageUrls}
              projectLink={card.projectLink}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;
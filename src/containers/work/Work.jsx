import React from "react";
import "./Work.css";
import { Card, MainText } from "../../components";

const Work = () => {
  const cardsData = [
    {
      title: "Cargo",
      description:
        "Developed website for Cargo company implementing Admin panel",
      imageUrls: [
        "/images/1.png",
        "/images/1.png",
        "/images/1.png",
        "/images/1.png",
        "/images/1.png",
      ],
      projectLink: "https://ph.poliiiiiiiiina.crabdance.com",
    },
    {
      title: "Nexus",
      description:
        "Developed website for Cargo company implementing Admin panel",
      imageUrls: ["/images/1.png", "/images/1.png", "/images/1.png"],
    },
    {
      title: "Nexus",
      description: "Designing the Nexus app",
      imageUrls: ["/images/1.png", "/images/1.png"],
    },
    {
      title: "Nexus",
      description: "Designing the Nexus app",
      imageUrls: ["/images/1.png", "/images/1.png"],
    },
    {
      title: "Nexus",
      description: "Designing the Nexus app",
      imageUrls: ["/images/1.png", "/images/1.png"],
    },
    {
      title: "Nexus",
      description: "Designing the Nexus app",
      imageUrls: ["/images/1.png", "/images/1.png"],
    },
  ];
  return (
    <div>
      <MainText />
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
    </div>
  );
};

export default Work;

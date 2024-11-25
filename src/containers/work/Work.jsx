import React from "react";
import "./Work.css";
import { Card, MainText } from "../../components";

const Work = () => {
  const cardsData = [
    {
      title: "Nexus",
      description: "Designing the Nexus app",
      image: "/images/1.png",
    },
    {
      title: "Genie",
      description: "Evolving the Genie app design language",
      image: "/images/1.png",
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
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
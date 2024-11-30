import React from "react";
import "./Work.css";
import { Card, MainText } from "../../components";
import { Container } from "react-bootstrap";

const Work = () => {
  const cardsData = [
    {
      title: "Cargo",
      description:
        "Developed a modern, responsive website for a cargo company with seamless Firebase integration for authentication and data storage. The site features a robust Admin Panel, enabling administrators to manage user data, send newsletters, and access a list of subscribed email addresses. A dedicated blog page allows for the creation and editing of posts directly from the Admin Panel. Additionally, an ‘About Us’ page includes a simple gallery with a lightbox feature, providing an elegant way to showcase the company’s story. This platform delivers a reliable and efficient solution for managing logistics operations and client interactions.",
      imageUrls: [
        "/images/Cargo/1.png",
        "/images/Cargo/2.png",
        "/images/Cargo/4.png",
        "/images/Cargo/5.png",
        "/images/Cargo/6.png",
      ],
      projectLink: "https://test.test.crabdance.com",
      tags: [
        "Admin Panel",
        "Responsive Design",
        "Firebase Integration",
        "Real-Time Updates",
        "Frontend-Backend Integration",
        "Email JS",
      ],
    },
    {
      title: "Photograph",
      description:
        "Crafted a professional portfolio website for a photographer, fully automated with Firebase integration. The platform includes a dynamic system for adding photos and creating categories, allowing the photographer to easily manage their gallery via an Admin Panel. Visitors can seamlessly browse through the photographer’s work in an elegantly designed, dynamically updated gallery. Additionally, the site enables the creation and editing of service pricing cards, ensuring flexibility and ease of use. This portfolio is designed to provide a polished and professional online presence, empowering the photographer to showcase their art effortlessly",
      imageUrls: [
        "/images/Photographer/1.png",
        "/images/Photographer/2.png",
        "/images/Photographer/3.png",
        "/images/Photographer/4.png",
        "/images/Photographer/5.png",
        "/images/Photographer/6.png",
      ],
      projectLink: "https://ph.poliiiiiiiiina.crabdance.com",
      tags: [
        "Portfolio",
        "Dynamic Updates",
        "Firebase Integration",
        "Admin Panel",
        "Responsive Design",
        "Image Management",
        "Category Updates",
        "Frontend Development",
      ],
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
              tags={card.tags}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;

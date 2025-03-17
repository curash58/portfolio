import React, { useState, useEffect } from "react";
import "./Work.css";
import { Card, MainText } from "../../components";
import { Container, Spinner } from "react-bootstrap";
import fetchCardsData from "./workData";

const Work = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCards = async () => {
      try {
        setLoading(true);
        const data = await fetchCardsData();
        setCards(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch cards:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  return (
    <div>
      <MainText />
      <Container className="work-cards-container">
        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="light">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : error ? (
          <div className="text-center my-5 text-white">{error}</div>
        ) : (
          <div className="work-cards">
            {cards.map((card, index) => (
              <Card
                key={card.id || index}
                title={card.title}
                description={card.description}
                imageUrls={card.imageUrls}
                projectLink={card.projectLink}
                tags={card.tags}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Work;
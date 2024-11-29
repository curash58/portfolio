import React from "react";
import { FaCode, FaDesktop, FaBrain, FaGamepad, FaTelegram, FaSchool, FaTools, FaChartLine } from "react-icons/fa";
import "./Timeline.css";

const timelineData = [
  {
    icon: <FaCode />,
    title: "Started with C++",
    description: "Wrote my first program in C++ under a tutor's guidance. Learned problem-solving fundamentals.",
  },
  {
    icon: <FaDesktop />,
    title: "Programming School",
    description: "Built websites with HTML/CSS. Explored Git and Object-Oriented Programming.",
  },
  {
    icon: <FaBrain />,
    title: "Self-learning",
    description: "Solved challenges on LeetCode. Learned linked lists, AVL trees, design patterns.",
  },
  {
    icon: <FaGamepad />,
    title: "Minecraft Plugins",
    description: "Developed server plugins in Java. Improved debugging and problem-solving.",
  },
  {
    icon: <FaTelegram />,
    title: "Telegram Bots",
    description: "Created Python bots. Explored APIs and automation.",
  },
  {
    icon: <FaSchool />,
    title: "Humber Polytechnic",
    description: "Dived deeper into React, Java, SQL. Explored CI/CD tools, Firebase, AWS.",
  },
  {
    icon: <FaTools />,
    title: "CI/CD Tools",
    description: "Implemented Jenkins pipelines. Hosted websites with Firebase and AWS.",
  },
  {
    icon: <FaChartLine />,
    title: "Present",
    description: "Continuously learning and improving. Applying knowledge to meaningful projects.",
  },
];

const Timeline = () => {
  return (
    <div className="section section-md py-5">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
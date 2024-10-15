import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, everyone! I'm <span className="purple">Ben Mohamed Ala </span>
            from <span className="purple"> Tunis, Tunisia.</span>
            <br />
            I have completed a Professional Master's in IT Management at ESEN Manouba.
            <br />
            When I'm not coding, I enjoy spending time on a few of my other passions!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

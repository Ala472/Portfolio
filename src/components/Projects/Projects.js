import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import universCar from "../../Assets/Projects/1.png";
import agil from "../../Assets/Projects/2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universCar}
              isBlog={false}
              title="Univers Car"
              description="The Univers Car web application is a dynamic portal for vehicle rentals, 
                            allowing users in Tunisia or abroad to book cars online according to their preferences.
                            It features functionalities for clients, agents, and administrators, including reservation management,
                            vehicle listings, and user accounts. The project aims to streamline the online booking process for better
                            accessibility and efficiency."
              ghLink="https://github.com/Ala472/Car-Rental"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agil}
              isBlog={false}
              title="Agil corporate university"
              description="The Agil Corporate University platform is an online training portal designed for the 
              employees of SNDP Agil. This application allows staff to access various training modules anytime 
              and from anywhere. It features functionalities such as course management, interactive assessments, and personalized progress tracking for learners. The project aims to facilitate access to continuous training, enhance employee skills, and promote professional development within the company."
              ghLink="https://github.com/Ala472/Agil-Corporate-University"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from './ContactForm';
import { FaXTwitter } from "react-icons/fa6";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeThirdSection() {
  return (
        <Container className="home-content-seconde">
        <Row>
          <Col md={6} className="home-about-social">
            <h1 className="social-title">Contact Me</h1>
            <p className="social-description">
            Feel free to reach out if you have any questions, project opportunities, or just want to connect. 
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Let’s build something amazing together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ala472"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ala-benmohamed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Ala_472"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} className="home-about-social">
            <ContactForm />
          </Col>
        </Row>
        </Container>

  );
}

export default HomeThirdSection;

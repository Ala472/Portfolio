import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Greetings from "./Greetings";

function HomeFirstSection() {
  return (
       
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="heading-grettings">
                <Greetings />
              </div>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ben Mohamed Ala</strong>
              </h1>
              <div className="main-detail">
                <p>I hold a degree in Information Management and a professional master’s in e-business. 
                  As a passionate web developer with a strong technical foundation and substantial 
                  experience in developing web applications, I am actively seeking new professional opportunities. 
                  My goal is to leverage my theoretical knowledge and hands-on skills to design and implement innovative, 
                  efficient web solutions while continuously learning and growing within a dynamic, challenging environment.</p>
                
              </div>
              <div className="type-writer">
                <Type />
              </div> 
  
            </Col>

            <Col md={5} className="myAvtar">
              <img
                src={homeLogo}
                alt="home pic"
                className="home-picture"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
          
        </Container>
      </Container>

  );
}

export default HomeFirstSection;

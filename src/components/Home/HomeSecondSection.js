import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";

function HomeSecondSection() {
  return (
        <Container className="home-content-seconde">
        <Row className="parent">
          <Col md={5} className="myAvtar">
              <img src={myImg} className="photo" alt="avatar" />
          </Col>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.5em" }}>
              About <span className="purple"> me </span>
            </h1>
            <p className="home-about-body">
            I’m a passionate developer with a strong background in backend technologies, 
            especially <b className="purple"> Symfony.</b> My skill set includes <b className="purple"> PHP, Javascript and Dart, </b> 
            which allows me to build dynamic and efficient web applications.
            <br/>
            <br/>
            I enjoy exploring the latest trends in Web Development and am particularly interested in how Blockchain 
            can revolutionize the digital world. My recent work focuses on using <b className="purple">React js</b> and <b className="purple">Node.js</b> to create user-friendly, 
            modern websites.
              <br />
              <br />
              I’m always learning, growing, and looking for new challenges to push the boundaries of what’s possible in tech.
            </p>
          </Col>
          
        </Row>
        </Container>

  );
}

export default HomeSecondSection;
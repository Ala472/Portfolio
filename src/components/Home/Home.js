import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

import HomeFirstSection from "./HomeFirstSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeThirdSection from "./HomeThirdSection";

function Home() {
  return (
       
      <Container fluid className="home-section" id="home">
        <Particle />
        <HomeFirstSection />
        <HomeSecondSection />
        <HomeThirdSection />
      </Container>

  );
}

export default Home;

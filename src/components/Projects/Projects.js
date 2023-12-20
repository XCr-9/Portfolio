import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="MA RELAX"
              description="MA RELAX is created for people who want to enjoy a moment of calm, reflection, and contemplation. It helps connect with yourself and finally relieve stress in a society filled with anxiety and claustrophobia."
              demoLink="https://matruecannabis.com/en/experience/relax"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Förderverein"
              description="Förderverein is about the Foerderverein Ggnauen e.V., which is a support/fundraising association to support the municipality of Ggnauen and projects there."
              demoLink="https://foerderverein-ggnauen.de/?src=peter-stuhlmann-webentwicklung.de-EN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hanapurity"
              description="Hanapurity offers a wide range of CBD products including CBD tinctures, edibles, topicals, hair care products, bath bombs, pet products, coffee pods and more."
              demoLink="https://hanapurity.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HotelGyms "
              description="HotelGyms uses a proprietary algorithm called GymFactor to evaluate and rate hotel gyms based on over 50 data points about equipment, size, amenities and more. "
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Whisky Exchange"
              description="The Whisky Exchange sells single malt, blended, grain and independent bottled whiskies from Scotland, Ireland, USA, Japan and other global regions. They have over 5,000 different whiskies available."
              ghLink=""
              demoLink="https://www.thewhiskyexchange.com/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

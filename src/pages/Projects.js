import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import baseball from "../assets/projects/baseball.PNG";
import playlist from "../assets/projects/playlist.PNG";
import thenadlee from "../assets/projects/thenadlee.PNG";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseball}
              isBlog={false}
              title="Baseball"
              description="sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              ghLink="https://github.com/hanyoko/BASEBALL.git"
              demoLink="http://hanyoko.dothome.co.kr/baseball"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playlist}
              isBlog={false}
              title="Playlist"
              description="sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              ghLink="https://github.com/hanyoko/PLAYLIST.git"
              demoLink="http://hanyoko.dothome.co.kr/playlist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thenadlee}
              isBlog={false}
              title="TheNadlee"
              description="sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              ghLink="https://github.com/hanyoko/THENADLEE.git"
              demoLink="https://team-project-thenadlee.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
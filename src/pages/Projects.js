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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", textAlign: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseball}
              isBlog={false}
              title="Baseball"
              description="Javascript / CSS / SCSS"
              description2="─────"
              description3="Javascript 조건문 수업을 들었을 때, 이해가 되지 않아 복습을 위해 팀을 모아 만든 야구게임 프로젝트입니다."
              description4=" "
              ghLink="https://github.com/hanyoko/BASEBALL.git"
              demoLink="http://hanyoko.dothome.co.kr/baseball"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playlist}
              isBlog={false}
              title="Playlist"
              description="Javascript / CSS / SCSS / PHP / MySQL"
              description2="─────"
              description3="PHP와 Javascript를 이용한 음악 플레이리스트 만들기"
              description4=" "
              ghLink="https://github.com/hanyoko/PLAYLIST.git"
              demoLink="http://hanyoko.dothome.co.kr/playlist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thenadlee}
              isBlog={false}
              title="TheNadlee"
              description="Javascript / SCSS / Styled-Component / React / Redux / Datepicker / GoogleMapsAPI / OpenWeather / Node.js / MySQL / AWS / Vercel"
              description2="─────"
              description3="React와 Node.js를 이용한 여행 일정 만들기 사이트"
              description4=" "
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
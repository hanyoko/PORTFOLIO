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
          Welcome to <strong className="yellow">My Projects </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px", textAlign: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseball}
              isBlog={false}
              title="Baseball"
              description6=" "
              description="Javascript / CSS / SCSS"
              description2="─────"
              description3="각 결과값에 맞는 이미지와 텍스트를 출력하도록 구현했습니다. 본인의 팀과 함께 자신의 확률을 시험해 보세요 Good Luck !"
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
              description6=" "
              description="Javascript / CSS / SCSS / PHP / MySQL"
              description2="─────"
              description3="자신만의 플레이리스트를 만들고, 공유하는 일들이 많아진 요즘. 취향에 맞는 플레이리스트를 만들 수 있습니다."
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
              description="Javascript / SCSS / React / Redux / Bootstrap / Styled-Component / Datepicker / OpenWeather / GoogleMapsAPI / Node.js / MySQL / AWS / Vercel"
              description2="─────"
              description3="Covid-19이 지나간 후, 다시 시작된 여행 ! 각 지역에 살아본 사람들이 모여서 만든 The Nadlee. 직접 여행 일정을 짜고 루트를 만들어 볼 수 있으며, 경험으로 만든 추천 일정 및 여행 시기에 맞는 여행 Tip도 추천해 줍니다 !"
              ghLink="https://github.com/hanyoko/THENADLEE.git"
              demoLink="https://thenadlee.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
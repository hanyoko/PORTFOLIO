import React from "react";
import {
  BsFiletypeCss,
  BsFiletypeScss,
  BsFillBootstrapFill
} from "react-icons/bs";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiPython,
  SiPhp,
  SiMysql
} from "react-icons/si";
import {
  FaNode
} from "react-icons/fa"
import { Col, Row } from "react-bootstrap";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <h3>Front-End</h3>
          <Col xs={4} md={2} className="tech-icons">
            <SiHtml5 />
            <h6>HTML5</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <BsFiletypeCss />
            <h6>CSS</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <BsFiletypeScss />
            <h6>SCSS</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            <h6>Javascript</h6>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
            <h6>Typescript</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <h6>React</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedux />
            <h6>Redux</h6>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <BsFillBootstrapFill />
            <h6>Bootstrap</h6>
          </Col>
        </Row>
      <Row style={{ justifyContent: "center" }}>
        <h3>Back-End</h3>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
          <h6>PHP</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
          <h6>MySQL</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaNode />
          <h6>NodeJs</h6>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
          <h6>Python</h6>
        </Col>
      </Row>
    </Row>
  );
}

export default Techstack;

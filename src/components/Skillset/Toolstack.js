import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGit } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingTop: "50px", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VScode</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>Vercel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons back-end">
          <BsGit />
          <h6>Git</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;

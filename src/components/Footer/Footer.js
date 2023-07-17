import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { SiVelog, SiNotion } from "react-icons/si";
import logo from "../../assets/han.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            {/* <h3></h3> */}
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/hanyoko"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://velog.io/@hanyoko"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiVelog />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.notion.so/hanyoko/e6d05846a3be4c75b670f494e6620524?v=5981dde458c145a883c962ca372e7291"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiNotion />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/koyohanyoko"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer
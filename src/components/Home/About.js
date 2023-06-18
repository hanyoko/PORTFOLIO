import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCalendarEventFill, BsPersonFill, BsPhoneFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
// import LaptopImg from "../../assets/yohan2.PNG";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   // AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row style={{ textAlign: "center"}}>
              <Col className="home-about-description">
                <h1 className="introduce">
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <Col className="about-me">
                  <Col className="about-box">
                    <Col className="about-icons">
                      <h1 className="yellow about-h">About Me</h1>
                      <p><BsPersonFill />  :  고요한</p>
                      <p><BsCalendarEventFill /> : 1996.01.14</p>
                      <p><BsPhoneFill /> : 010-2060-5260</p>
                      <p><FaUniversity /> : 경운대학교 항공서비스학과</p>
                    </Col>
                    <Col className="about-icons">
                      <h1 className="yellow about-h">Contact</h1>
                      <p>E-mail : koyohanyoko@gmail.com</p>
                      <p>Velog : https://velog.io/@hanyoko</p>
                      <p>Notion : https://hanyoko.notion.site</p>
                      <p>Github : https://github.com/hanyoko</p>
                    </Col>
                  </Col>
                  <Col className="about-box">
                    <Col className="about-icons">
                      <h1 className="yellow about-h">Education</h1>
                      <p>{'<'} Canada Working Holiday {'>'}<br/> 
                        <span>2020-08-14 ~ 2021-08-31</span>
                      </p>
                      <p>{'<'} Green Computer Academy{'>'}<br />
                        <span className="about-span"> - IoT융합 자바스크립트 기반 소프트웨어 엔지니어 개발자(프론트엔드) 과정 수료</span><br />
                        <span>2022-10-04 ~ 2023-03-23</span>
                      </p>
                    </Col>
                    <Col className="about-icons">
                      <h1 className="yellow about-h">doing these days ...</h1>
                      <p>ㆍ정보처리기사 실기 공부</p>
                      <p>ㆍ프로그래머스 문제 풀기</p>
                      <p>ㆍ학습내용 복습 및 velog에 정리</p>
                      <p>ㆍNomadcoders Challenge JS, TS</p>
                    </Col>
                  </Col>
                </Col>
              </Col>
              {/* <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col> */}
            </Row>
            {/* <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/hanyoko"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/hanyoko_"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row> */}
          </Container>
        </Container>
      );
    
}

export default About
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCalendarEventFill, BsPersonFill, BsPhoneFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

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
                      <p>ㆍ학습내용 복습 및 velog에 정리<span className="about-span"> - ing</span></p>
                      <p>ㆍ정보처리기사 공부<span className="about-span"> - 23.06.14 필기 합격 / 실기 준비 中</span></p>
                      <p>ㆍNomadcoders Challenge JS<span className="about-span"> - 23.05.29 수료</span></p>
                      <p>ㆍNomadcoders Challenge TS<span className="about-span"> - 23.06.19 수료</span></p>
                    </Col>
                  </Col>
                </Col>
              </Col>
            </Row>
            
          </Container>
        </Container>
      );
    
}

export default About
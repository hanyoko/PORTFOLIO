import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { SiInstagram, SiGithub, SiVelog, SiNotion } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{ paddingTop: '65px' }}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                  <h1>FIND ME ON</h1>
                  <p>
                  Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                  </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/hanyoko"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://velog.io/@hanyoko"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiVelog />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://hanyoko.notion.site"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiNotion />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/koyohanyoko"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social
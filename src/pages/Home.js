import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/yohan.PNG'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const DIVIDER_HEIGHT = 80;
const Home = () => {
  const homeRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const  scrollTop  = window.pageYOffset; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      console.log(scrollTop);
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log(homeRef.current)
          //현재 1페이지
          console.log("현재 1페이지, down");
          window.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } 
      } 
      else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          window.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } 
      }
    };
    const homeRefCurrent = homeRef.current;
    homeRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      homeRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <section ref={homeRef} className="home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YOHAN KO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home
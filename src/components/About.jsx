import React from "react";
import './About.css';
import aboutImg from "../assets/s22.png";
import CountUp from "react-countup";
import "./About.css";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <section name="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              We specialize in Online Branding Solutions, prioritizing client needs to boost organic results. Oh! Puhleeez, a prominent name in Online Branding, boasts a 100+ client family. Our dedicated team excels in wholehearted project delivery, with a focus on effective Search Engine Optimization for expanding audience reach.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={99} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">Success Rates</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={40} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Active Clients</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Industries</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
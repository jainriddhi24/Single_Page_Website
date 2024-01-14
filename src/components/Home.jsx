import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/header.png";
import "./Home.css";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section name= "home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Begin an empowering journey at Oh! Phuleez, where cutting-edge learning experiences redefine your path, fostering career excellence. 
              </p>
            </div>
              <Link to='contact'  >
                <button style={{ marginLeft: "5rem" }}>Call Us <HiArrowNarrowRight style={{ marginLeft: "0.75rem" }} /> </button>
              </Link>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
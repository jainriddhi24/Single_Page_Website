import React from "react";
import { Container, Row, Col } from "reactstrap";
import HTML from "../assets/ssss.png";
import './Course.css';
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },
  {
    id: "04",
    title: "SEO (Search Engine Optimization) Full Course",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },
  {
    id: "05",
    title: "Brand Identity Course",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },
  {
    id: "06",
    title: "Python - Beginner Full Course",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: HTML,
  },
];

const Course = () => {
  return (
    <section name='skills'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-60">
                <h2>Our Popular Courses</h2>
                <p>
                Unleash your potential at Oh! Phuleez, where revolutionary learning experiences redefine your journey. Our cutting-edge programs empower career excellence, propelling you toward unprecedented success. Join us and shape your future.
                </p>
              </div>

              <div className="w-50 text-end">
                <button style={{ marginLeft: "10rem" }}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Course;
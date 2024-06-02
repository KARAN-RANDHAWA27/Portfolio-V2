import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dev1 from "../../assets/dev1.jpg";
import dev2 from "../../assets/dev2.jpg";
import dev3 from "../../assets/dev3.jpg";
import "./Home.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="intro-section">
              <div className="intro-box animate-intro">
                <h2 className="section-title">Welcome to My Portfolio</h2>
                <p className="section-text">
                  Hello, I'm <span className="highlight-text">Karan Randhawa</span>,
                  a passionate and detail-oriented full stack developer with a
                  proven track record of designing, implementing, and
                  maintaining cutting-edge web applications. Proficient in both
                  front-end and back-end technologies, I excel at creating
                  seamless user experiences and scalable server-side solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 custom-rounded"
                    src={dev1}
                    alt="Profile"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 custom-rounded"
                    src={dev2}
                    alt="Profile"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 custom-rounded"
                    src={dev3}
                    alt="Profile"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

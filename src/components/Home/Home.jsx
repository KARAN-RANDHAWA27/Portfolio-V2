import React from "react";
import Header from "../Header/Header";
import "./Home.css"; // Ensure you include your CSS file for the homepage
import Door from "./Door";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="background-overlay"></div>
      <Header />
      <main className="content-container">
        {/* Left Section (Intro) */}
        <section className="intro-section md:w-2/3 md:pr-10 mb-8 md:mb-0">
          <div className="intro-box animate-intro">
            <h2 className="section-title">Welcome to My Portfolio</h2>
            <p className="section-text">
              Hello, I'm <span className="highlight-text">Your Name</span>, a
              passionate full stack developer with a knack for building robust
              and scalable web applications.
            </p>
            <p className="section-text">
              With a strong foundation in both front-end and back-end
              development, I thrive on bringing creative ideas to life through
              code. My journey in software development has been driven by a
              relentless curiosity and a dedication to crafting solutions that
              not only meet but exceed expectations.
            </p>
            <p className="section-text">
              My expertise includes JavaScript, React.js, Node.js, and various
              SQL/NoSQL databases. I am passionate about problem-solving and
              delivering impactful digital experiences.
            </p>
          </div>
        </section>

        {/* Right Section (Treasure Box) */}
        <section className="treasure-section md:w-1/3 flex justify-center items-center">
          <Door />
        </section>
      </main>
    </div>
  );
};

export default Homepage;

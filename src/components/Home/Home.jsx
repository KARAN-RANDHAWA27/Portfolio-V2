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
        <section className="intro-section md:w-2/3 mt-5 md:pr-10 mb-8 md:mb-0">
          <div className="intro-box animate-intro">
            <h2 className="section-title">Welcome to My Portfolio</h2>
            <p className="section-text">
              Hello, I'm <span className="highlight-text">Your Name</span>, a
              passionate and detail-oriented full stack developer with a proven
              track record of designing, implementing, and maintaining
              cutting-edge web applications. Proficient in both front-end and
              back-end technologies, I excel at creating seamless user
              experiences and scalable server-side solutions.
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

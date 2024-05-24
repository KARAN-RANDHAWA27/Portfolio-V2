import React, { useState } from "react";
import ReactTyped from "react-typed";
import { ArrowDownIcon } from "@heroicons/react/solid";
import backgroundImage from "../../assets/Image1.jpg";
import profile from "../../assets/profile.jpg";
import "./Hero.css";

const Hero = ({ onScroll }) => {
  const [typedIndex, setTypedIndex] = useState(0);

  // Colors corresponding to each string
  const stringColors = ["#FFD700", "#7FFF00", "#FF1493"];

  // Callback to update typedIndex state
  const handleTyped = (index) => {
    setTypedIndex(index);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: `linear-gradient(225deg, 
          rgba(84, 98, 107, 0.8) 0%, 
          rgba(9, 21, 153, 0.8) 25%, 
          rgba(15, 12, 45, 0.8) 50%, 
          rgba(37, 10, 46, 0.8) 75%, 
          rgba(114, 8, 52, 0.8) 100%), 
          url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <p className="text-lg md:text-xl mb-4">
            Hello there, Welcome to my site.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            I'm <span style={{ color: "#FF0642" }}>Karan Randhawa</span>
          </h1>
          <div className="text-xl md:text-2xl mb-4">
            {typedIndex === 0 && (
              <ReactTyped
                strings={["Full Stack Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                onComplete={() => handleTyped(1)}
                smartBackspace
                style={{ color: stringColors[0] }}
              />
            )}
            {typedIndex === 1 && (
              <ReactTyped
                strings={["Application Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                onComplete={() => handleTyped(2)}
                smartBackspace
                style={{ color: stringColors[1] }}
              />
            )}
            {typedIndex === 2 && (
              <ReactTyped
                strings={["Designer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                onComplete={() => handleTyped(0)}
                smartBackspace
                style={{ color: stringColors[2] }}
              />
            )}
          </div>
          <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-start">
            <button
              className="text-white bg border-2 border-8d0837 hover:bg-ff0642 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 contact-button"
              onClick={() => {
                // Handle download CV action
              }}
            >
              Download CV
            </button>
            <button
              className="text-white bg border-2 border-8d0837 hover:bg-ff0642 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 contact-button"
              onClick={() => {
                // Handle contact me action
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="relative p-1 md:p-6 lg:p-8 animate-image-tilt"
            style={{
              borderRadius: "16px",
              backgroundImage: `linear-gradient(225deg, 
                rgba(114, 8, 52, 0.8), 
                rgba(37, 10, 46, 0.8), 
                rgba(15, 12, 45, 0.8), 
                rgba(9, 21, 153, 0.8), 
                rgba(84, 98, 107, 0.8))`,
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                backgroundImage: `linear-gradient(white, white), linear-gradient(225deg, 
                rgba(114, 8, 52, 0.8), 
                rgba(37, 10, 46, 0.8), 
                rgba(15, 12, 45, 0.8), 
                rgba(9, 21, 153, 0.8), 
                rgba(84, 98, 107, 0.8))`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                border: "8px solid transparent",
              }}
            >
              <img
                src={profile} // Put your image path here
                alt="Karan Randhawa"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 flex justify-center w-full">
        <button onClick={onScroll} aria-label="Scroll down">
          <ArrowDownIcon className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

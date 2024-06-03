import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { ArrowDownIcon } from "@heroicons/react/solid";
import profile from "../../assets/profile_img.jpg";
import "./Hero.css";

const Hero = ({ onScroll }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const stringColors = ["#0b3d91", "#800080", "#e0e0e0"];

  const handleTyped = (index) => {
    setTypedIndex(index);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-7xl">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <p className="text-lg md:text-xl mb-4">
            Hello there, Welcome to my site.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            I'm <span style={{ color: "#FF0642" }}>Karan Randhawa</span>
          </h1>
          <div className="text-xl md:text-2xl mb-4">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Application Developer",
                "Designer",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
              style={{ color: "#0b3d91" }}
            />
          </div>
          <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-center">
            <button
              className="text-white bg border-2 border-8d0837 hover:bg-ff0642 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 contact-button ml-0 md:ml-4 mt-4 md:mt-0"
              onClick={() => {
                // Handle download CV action
              }}
            >
              Download CV
            </button>
            <button
              className="text-white bg border-2 border-8d0837 hover:bg-ff0642 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 contact-button ml-0 md:ml-4 mt-4 md:mt-0"
              onClick={() => {
                // Handle contact me action
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative p-1 md:p-6 lg:p-8 rotating-border">
            <img
              src={profile}
              alt="Karan Randhawa"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full profile-picture"
            />
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

import React, { useState } from "react";
import "./Door.css";

const Door = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKnock = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000); // Adjust timing as needed
  };

  return (
    <div className="door-container">
      <div className={`door ${isOpen ? "open" : ""}`}>
        <div className="door-frame">
          <div className="door-leaf"></div>
        </div>
        <div className="door-knob"></div>
      </div>
      <div className={`door-text ${isOpen ? "show" : ""}`}>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="door-button" onClick={handleKnock}>
        <span>Knock Here</span>
      </div>
    </div>
  );
};

export default Door;

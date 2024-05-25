import React, { useState } from "react";
import "./Door.css";

const Door = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoor = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="backDoor">
      {isOpen && (
        <div className="door-content">
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>MERN</li>
          </ul>
        </div>
      )}
      <div className={`door ${isOpen ? "doorOpen" : ""}`} onClick={toggleDoor}>
        <div className="door-frame">
          <h4 className="flex justify-start flex-1">Open</h4>
          <div className="door-leaf"></div>
          <div className="door-handle">
            <div className="door-opener"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;

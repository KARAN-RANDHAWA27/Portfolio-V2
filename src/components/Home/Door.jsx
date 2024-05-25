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
        <div className="">
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
      )}
      <div className={`door ${isOpen ? "doorOpen" : ""}`} onClick={toggleDoor}>
        <div className="door-frame">
          <div className="door-leaf"></div>
          <div className="door-handle"></div>
        </div>
      </div>
    </div>
  );
};

export default Door;

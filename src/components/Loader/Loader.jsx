// Loader.jsx
import React, { useEffect, useState } from "react";
import "./LoaderAnimation.css"; // Import loader animation styles

const Loader = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, [isLoading, setIsLoading]);

  return (
    <div className="loader-container">
      <figure>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </figure>
    </div>
  );
};

export default Loader;

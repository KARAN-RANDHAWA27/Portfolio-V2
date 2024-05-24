import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"; // Import Tailwind CSS
import Hero from "./components/Hero/Hero";
import Home from "./components/Home.js/Home";

function App() {
  const [flipped, setFlipped] = useState(false);
  const [startY, setStartY] = useState(null);

  const handleScroll = () => {
    setFlipped(!flipped);
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0 && !flipped) {
      setFlipped(true);
    } else if (event.deltaY < 0 && flipped) {
      setFlipped(false);
    }
  };

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (startY === null) {
      return;
    }

    const currentY = event.touches[0].clientY;
    const diffY = startY - currentY;

    if (diffY > 50 && !flipped) {
      setFlipped(true);
    } else if (diffY < -50 && flipped) {
      setFlipped(false);
    }

    // Reset startY to avoid repeated flips during the same touch event
    setStartY(null);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [flipped, startY]);

  return (
    <div className="flip-container">
      <div className={`flip ${flipped ? "flip-active" : ""}`}>
        <div className="front">
          <Hero onScroll={handleScroll} />
        </div>
        <div className="back">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

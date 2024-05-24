import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"; // Import Tailwind CSS
import Hero from "./components/Hero/Hero";
import Home from "./components/Home.js/Home";

function App() {
  const [flipped, setFlipped] = useState(false);

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

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [flipped]);

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

import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"; // Import Tailwind CSS
import Hero from "./components/Hero/Hero";
import AppRouter from "./router/Router";
import Loader from "./components/Loader/Loader";

function App() {
  const [flipped, setFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    // Simulate loading for 2.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [flipped]);

  return (
    <div className="homepage">
      <div className="background-overlay"></div>

      {/* Conditionally render Loader or content */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flip-container">
          <div className={`flip ${flipped ? "flip-active" : ""}`}>
            <div className="front">
              <Hero onScroll={handleScroll} />
            </div>
            <div className="back">
              <AppRouter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;

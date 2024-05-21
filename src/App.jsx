import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import "./index.css"; // Import Tailwind CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto flex flex-col justify-center items-center text-center">
        <section id="home" className="my-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p>This is the home section.</p>
        </section>
        <section id="about" className="my-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>This is the about section.</p>
        </section>
        <section id="projects" className="my-10">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p>This is the projects section.</p>
        </section>
        <section id="contact" className="my-10">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
    </div>
  );
}

export default App;

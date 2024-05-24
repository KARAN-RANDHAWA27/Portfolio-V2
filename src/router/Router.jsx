import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../components/Home/Home";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

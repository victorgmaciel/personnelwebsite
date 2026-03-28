import React from "react";
import Profile from "./components/social/intro";
import ScrollingHorizontally from "./components/horizontal";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Film from "./pages/film";
import About from "./pages/about";
import Experience from "./pages/Experience";
import "./App.css";
import CurrentProjects from "./pages/currentProjects";
import Comics from "./pages/Comics";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollingHorizontally />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/currentProjects" element={<CurrentProjects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/film" element={<Film />} />
            <Route path="/about" element={<About />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

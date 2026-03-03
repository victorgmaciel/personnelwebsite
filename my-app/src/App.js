import React from "react";
import Profile from "./components/social/intro.js";
import ScrollingHorizontally from "./components/horizontal.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects.js";
import Film from "./pages/film.js";
import About from "./pages/about.js";
import "./App.css";
import CurrentProjects from "./pages/currentProjects.js";
import Comics from "./pages/Comics.js";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Profile />
                  <ScrollingHorizontally />
                </>
              }
            />
            <Route
              exact
              path="/currentProjects"
              element={<CurrentProjects />}
            />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/film" element={<Film />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/comics" element={<Comics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

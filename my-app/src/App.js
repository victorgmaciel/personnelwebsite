import React from 'react';
import Profile from './components/social/intro.js';
import ScrollingHorizontally from './components/horizontal.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects.js';
import Film from './pages/film.js';
import About from '../src/pages/about.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<><Profile /><ScrollingHorizontally /></>} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/film' element={<Film />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

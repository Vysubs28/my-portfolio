import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SpaceBackground from './components/SpaceBackground'; // ✅ NEW

export default function App() {
  return (
    <>
      <SpaceBackground /> {/* ✅ Render canvas-based starfield */}

      <Router>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            About Me
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Me
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

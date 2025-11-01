import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home-page/Homepage.jsx";
//import About from "./pages/About-page/About-page.jsx";//
import Contact from "./pages/Contact-page/Contact-page.jsx";
import CoursesPage from "./pages/Course-page/Course-page.jsx";

import "./App.css";

const App = () => {
  // Get theme from localStorage, default to "light"
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("current_theme");
    return savedTheme || "light";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Main routes - lowercase for consistency */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursesPage />} />
          
          {/* Catch-all route for 404 - redirects to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
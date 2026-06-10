import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre"; // corrigé le chemin
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true); // typo corrigée

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false); // typo corrigée
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop /> {/* mieux à l'extérieur du div App */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;


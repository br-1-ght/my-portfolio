import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import Skills from "./pages/Projects";
import Projects from "./pages/ProjectCard";
import Certificate from "./pages/Certificate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
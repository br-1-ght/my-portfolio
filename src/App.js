import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}


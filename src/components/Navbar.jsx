import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Igwe Bright</h1>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

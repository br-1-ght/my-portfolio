import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">iGWE BRIGHT SUNDAY</h1>
      <div className="nav-buttons">
        <a href="#resume" className="resume-btn">Resume</a>
        <button className="menu-btn">
          <span className="menu-icon">≡</span>
        </button>
      </div>
    </nav>
  );
}
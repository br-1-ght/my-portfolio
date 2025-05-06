import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
        IGWE BRIGHT SUNDAY 
      </div>
      <div className="footer-links">
        <a href="mailto:brightigwe417@gmail.com" className="footer-icon">
            <i class="bi bi-envelope-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i class="bi bi-linkedin"></i>
        </a>
        <a href="tel:+2348088179399" className="footer-icon">
            <i class="bi bi-telephone-fill"></i>
        </a>
        <a href="https://github.com/br-1-ght" className="footer-icon">
            <i class="bi bi-github"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>IGWE BRIGHT SUNDAY</p>
        <p className="report-page">Report page<i class="bi bi-flag-fill"></i></p>
      </div>
    </footer>
  );
}
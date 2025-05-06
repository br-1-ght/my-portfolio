import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
        IGWE BRIGHT SUNDAY
      </div>
      <div className="footer-links">
        <a href="mailto:brightigwe417@gmail.com" className="footer-icon">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="tel:+2348088179399" className="footer-icon">
          <i className="fas fa-phone"></i>
        </a>
        <a href="https://github.com/br-1-ght" className="footer-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>IGWE BRIGHT SUNDAY</p>
        <p className="report-page">Report page</p>
      </div>
    </footer>
  );
}
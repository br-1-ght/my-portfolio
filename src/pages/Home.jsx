import React from "react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi,</h1>
          <h1>I am Bright</h1>
          <p>
          I'm Igwe Bright, a passionate and skilled Front-End & React Developer with a
           strong foundation in modern web technologies and over 2 years of practical experience building responsive, 
           performant, and user-focused websites. I specialize in building clean, scalable web interfaces using React, JavaScript, HTML/CSS, 
           and Tailwind, with hands-on knowledge of tools like Git, Netlify, and Figma.

            I’ve contributed to real-world projects that required not just coding ability, but problem-solving, UX thinking, 
            and team collaboration. Whether it's building reusable components, connecting APIs, or deploying to production, I
            take ownership of the full development cycle with speed and precision.
          </p>
          
          <div className="email-container">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="explore-btn">Explore My Work</button>
          </div>
        </div>
        
        <div className="hero-image">
          <img src='./assets/images/team-3.jpg' alt="Profile" />
        </div>
      </div>
    </section>
  );
}
import React from "react";
// Import images from your assets folder or use placeholders
export default function Skills() {
  const skillsData = [
    { id: 1, image: './assets/images/HTML.jpg', title: "HTML-5" },
    { id: 2, image: './assets/images/React.jpg', title: "ONE PAGE WEBSITE WITH REACT" },
    { id: 3, image: './assets/images/node.png', title: "NodeJS&ExpressJS" },
    { id: 4, image: './assets/images/Responsivejpg', title: "RESPONSIVE WEBSITES" },
    { id: 5, image: './assets/images/feedback.jpg', title: "CONSTUCTIVE FEEDBACK." },
    { id: 6, image: './assets/images/Asynch.jpg', title: "ASYNCHRONOUS PROGRAMMING" },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-header">
      HTML5 & CSS3, JavaScript (ES6+), React.js, Responsive Design, Version Control
      </div>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.image} alt={skill.title} />
            <div className="skill-title">{skill.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
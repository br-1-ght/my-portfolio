import React from "react";
// Import project images

export default function Projects() {
  const projectData = [
    { 
      id: 1, 
      image: './assets/images/Works4.jpeg', 
      title: "E-COMMERCE WEBSITE", 
      highlight: ""
    },
    { 
      id: 2, 
      image: './assets/images/Works2.jpeg', 
      title: "E-COMMERCE WEBSITE",
      highlight: ""
    },
    { 
      id: 3, 
      image: './assets/images/Works1.jpeg', 
      title: "E-COMMERCE WEBSITE",
      highlight: ""
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">PROJECT</h2>
      <p className="projects-subtitle">
        A collection on some of the projects I have worked on using my skills
      </p>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            {project.highlight && (
              <div className="project-highlight">{project.highlight}</div>
            )}
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
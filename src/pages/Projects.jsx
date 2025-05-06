import React from "react";

const projectData = [
  { id: 1, image: "./assets/images/Works4.jpeg", title: "E-commerce Website" },
  { id: 2, image: "./assets/images/Works2.jpeg", title: "E-commerce Website" },
  { id: 3, image: "./assets/images/Works1.jpeg", title: "E-commerce Website" },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h3>My Projects</h3>
      <div className="project-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
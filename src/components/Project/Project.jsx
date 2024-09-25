import React, { useState } from "react";
import "./Project.css";
import Project1 from "../../assets/Project-1.png";
import Project2 from "../../assets/Project-2.png";

const projects = [
  {
    id: 1,
    name: "Video Streaming Website",
    image: Project1,
    technologies: "React.js, Bootstrap, YouTube Data API, Google OAuth",
    about:
      "This is a description of Project 1. It includes features like A, B, and C.",
    features: [
      "Built a responsive video streaming platform using React.js and Bootstrap.",
      "Integrated the YouTube Data API to dynamically fetch and display video content.",
      "Implemented Google OAuth for secure user authentication and personalized user experiences.",
      "Developed user-friendly interfaces to enhance user engagement and satisfaction.",
    ],
    liveLink: "https://streamifyvideo.netlify.app/",
    githubLink:
      "https://github.com/atharvtiwari12/Streamify-Video-Streaming-Website",
  },
  {
    id: 2,
    name: "Flight Management System",
    image: Project2,
    technologies: "HTML, CSS, JavaScript, Java, MySQL, Spring Boot.",
    about:
      "This is a description of Project 2. It includes features like X, Y, and Z.",
    features: [
      "Designed and developed a full-fledged Flight Management System with separate roles for users and administrators.",
      "Implemented functionalities for searching, booking flights, and managing flight schedules.",
      "Leveraged REST APIs for communication between the front-end and back-end.",
      "Applied MySQL for robust data storage and retrieval, optimizing the database for performance.",
    ],
    liveLink: "https://github.com/atharvtiwari12/Flight-Management-System",
    githubLink: "https://github.com/atharvtiwari12/Flight-Management-System",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className={`app-container ${selectedProject ? "blur-background" : ""}`}
      id="projects"
    >
      <div className="project-section">
        <h3>Projects</h3>

        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-info">
                <h4>{project.name}</h4>
                <p>{project.technologies}</p>
                <span>See it here &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-dialog">
          <span className="close-dialog" onClick={closeDialog}>
            &larr; Go to Projects
          </span>
          <div className="dialog-content">
            <h3>{selectedProject.name}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="dialog-image"
            />
            <h4>Technologies Used:</h4>
            <p>{selectedProject.technologies}</p>
            <h4>Features:</h4>
            <ul>
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h4>View Project:</h4>
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedProject.liveLink}
            </a>
            <h4>GitHub:</h4>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedProject.githubLink}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

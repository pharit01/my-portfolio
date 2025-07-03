import React from 'react';
import '../styles/Projects.css';
// import project1 from '../assets/project1.jpg';
// import project2 from '../assets/project2.jpg';
// import project3 from '../assets/project3.jpg';

export const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          {/* <img src={project1} alt="Project One" className="project-img" /> */}
          <div className="project-name">Project One</div>
          <div className="project-btn-group">
            <a href="#" className="project-btn">Github</a>
            <a href="#" className="project-btn">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          {/* <img src={project2} alt="Project Two" className="project-img" /> */}
          <div className="project-name">Project Two</div>
          <div className="project-btn-group">
            <a href="#" className="project-btn">Github</a>
            <a href="#" className="project-btn">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          {/* <img src={project3} alt="Project Three" className="project-img" /> */}
          <div className="project-name">Project Three</div>
          <div className="project-btn-group">
            <a href="#" className="project-btn">Github</a>
            <a href="#" className="project-btn">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};
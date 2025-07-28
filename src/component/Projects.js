import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/portfolio.png';
import project2 from '../assets/Pokemons.png';
// import project3 from '../assets/project3.jpg';

export const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <img src={project1} alt="Project One" className="project-img" />
          <div className="project-name">My-Portfolio</div>
          <div className="project-btn-group">
            <a href="https://github.com/pharit01/my-portfolio" className="project-btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://pharit01.github.io/my-portfolio/" className="project-btn">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project Two" className="project-img" />
          <div className="project-name">Test Api Pokemons</div>
          <div className="project-btn-group">
            <a href="https://github.com/pharit01/my-portfolio/tree/main/src/component/Poke/" className="project-btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://pharit01.github.io/Pokemons/" className="project-btn">Live Demo</a>
          </div>
        </div>
        {/* <div className="project-card">
          <img src={project3} alt="Project Three" className="project-img" />
          <div className="project-name">Project Three</div>
          <div className="project-btn-group">
            <a href="#" className="project-btn">Github</a>
            <a href="#" className="project-btn">Live Demo</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
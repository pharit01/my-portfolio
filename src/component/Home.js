import React from 'react';
import '../styles/Home.css'; 
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

export const Home = ({ setPage }) => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-content">
          <div className="home-card-left">
            <img
              src={profileImg} 
              alt="Pharit"
              className="home-avatar-large"
            />
          </div>
          <div className="home-card-right">
            <div className="home-greeting">Hello, I’m</div>
            <div className="home-title">Pharit Sariwong</div>
            <div className="home-role-large">Fullstack Developer</div>
            <div className="home-btn-group">
              <a href={resumePdf} className="home-btn" download>Download CV</a>
              <a
                href="#contact"
                className="home-btn"
                onClick={e => {
                  e.preventDefault();
                  setPage("contact");
                }}
              >
                Contact Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

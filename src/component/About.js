import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.jpg';
import briefcaseIcon from '../assets/briefcase-solid.svg';
import graduateIcon from '../assets/user-graduate-solid.svg';

export const About = () => {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-img-section">
          <img src={profileImg} alt="Pharit" className="about-img" />
        </div>
        <div className="about-info-section">
          <div className="about-cards">
            <div className="about-card">
              <img src={briefcaseIcon} alt="Experience" className="about-icon" />
              <div className="about-card-title">Experience</div>
              <div className="about-card-sub">1+ years</div>
              <div className="about-card-desc">Fullstack Developer</div>
            </div>
            <div className="about-card">
              <img src={graduateIcon} alt="Education" className="about-icon" />
              <div className="about-card-title">Education</div>
              <div className="about-card-sub">B.Eng. Bachelor of Engineering</div>
            </div>
          </div>
          <div className="about-desc">
            Graduated with a Bachelor's degree in Engineering, majoring in Computer Engineering. Possess knowledge and skills in problem-solving as well as coordination with personnel. Have 1 year of experience working as a developer.
          </div>
        </div>
      </div>
    </div>
  );
};
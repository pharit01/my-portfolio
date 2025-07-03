import React from 'react';
import '../styles/Experience.css';
import checkIcon from '../assets/circle-check-solid.svg';

export const Experience = () => {
  return (
    <div className="exp-container" id="experience">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-content">
        <div className="exp-card">
          <div className="exp-card-title">Frontend Development</div>
          <ul className="exp-list">
            <li><img src={checkIcon} alt="" className="exp-icon" /> HTML</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> CSS</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> JavaScript</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> React</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> Rest Api</li>
            <li></li>
          </ul>
        </div>
        <div className="exp-card">
          <div className="exp-card-title">Backend Development</div>
          <ul className="exp-list">
            <li><img src={checkIcon} alt="" className="exp-icon" /> Node JS</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> Express JS</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> Git</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> Java</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> PostgreSQL</li>
            <li><img src={checkIcon} alt="" className="exp-icon" /> Oracle SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
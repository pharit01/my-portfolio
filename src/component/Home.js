import React, { useEffect, useState } from 'react';
import '../styles/Home.css'; 
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

export const Home = ({ setPage }) => {
  const roles = ["Fullstack Developer", "Frontend Developer"];
  const [displayText, setDisplayText] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[roleIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(roles[roleIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex, roles]);

  useEffect(() => {
    setCharIndex(0);
    setTyping(true);
  }, [roleIndex]);

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
            <div className="home-role-large">{displayText}<span className="typing-cursor">|</span></div>
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

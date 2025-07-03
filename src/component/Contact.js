import React from 'react';
import '../styles/Contact.css';
import mailIcon from '../assets/envelope-solid.svg';

export const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-box">
        <img src={mailIcon} alt="mail" className="contact-icon" />
        <span className="contact-email">Pharitsariwong@gmail.com</span>
      </div>
    </div>
  );
};
import React, { useState } from "react";
import resume from "../assets/Resume.pdf";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="pf-nav">
      <a href="#home" className="pf-logo">
        Pharit<span>.</span>
      </a>

      <div className="pf-nav-links">
        <a className="pf-nav-pill" href="#home">Home</a>
        <a className="pf-nav-pill" href="#work">Work</a>
        <a className="pf-nav-pill" href="#about">About</a>
        <a className="pf-nav-pill" href="#contact">Contact</a>
      </div>

      <div className="pf-nav-right">
        <a className="pf-btn-dark pf-cta-desktop" href={resume} download>
          Download CV
        </a>
        <button
          className="pf-burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="pf-mm-overlay" onClick={close} />
          <div className="pf-mobile-menu">
            <a className="pf-mm-link" onClick={close} href="#home">Home</a>
            <a className="pf-mm-link" onClick={close} href="#work">Work</a>
            <a className="pf-mm-link" onClick={close} href="#about">About</a>
            <a className="pf-mm-link" onClick={close} href="#contact">Contact</a>
            <a className="pf-mm-cv" onClick={close} href={resume} download>
              Download CV
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

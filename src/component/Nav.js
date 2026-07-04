import React, { useState } from "react";
import resume from "../assets/Resume.pdf";
import { scrollToSection } from "../utils/scrollToSection";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="pf-nav">
      <a href="#home" className="pf-logo" onClick={(e) => scrollToSection(e, "home")}>
        Pharit<span>.</span>
      </a>

      <div className="pf-nav-links">
        <a className="pf-nav-pill" href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
        <a className="pf-nav-pill" href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
        <a className="pf-nav-pill" href="#experience" onClick={(e) => scrollToSection(e, "experience")}>Experience</a>
        <a className="pf-nav-pill" href="#work" onClick={(e) => scrollToSection(e, "work")}>Work</a>
        <a className="pf-nav-pill" href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
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
            <a className="pf-mm-link" href="#home" onClick={(e) => { scrollToSection(e, "home"); close(); }}>Home</a>
            <a className="pf-mm-link" href="#about" onClick={(e) => { scrollToSection(e, "about"); close(); }}>About</a>
            <a className="pf-mm-link" href="#experience" onClick={(e) => { scrollToSection(e, "experience"); close(); }}>Experience</a>
            <a className="pf-mm-link" href="#work" onClick={(e) => { scrollToSection(e, "work"); close(); }}>Work</a>
            <a className="pf-mm-link" href="#contact" onClick={(e) => { scrollToSection(e, "contact"); close(); }}>Contact</a>
            <a className="pf-mm-cv" onClick={close} href={resume} download>
              Download CV
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

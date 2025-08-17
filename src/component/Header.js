import React, { useState } from "react";
import '../styles/Header.css';

export const Header = ({ page, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (key) => {
    setPage(key);
    setMenuOpen(false);
  };
  return (
      <header className="header">
        <div className="header-full">
          <h1 className="logo">PHARIT</h1>
          <nav className="nav">
          <a
            href="#home"
            className={`nav-link${page === "home" ? " active" : ""}`}
            onClick={() => setPage("home")}
          >Home</a>
          <a
            href="#about"
            className={`nav-link${page === "about" ? " active" : ""}`}
            onClick={() => setPage("about")}
          >About</a>
          <a
            href="#experience"
            className={`nav-link${page === "experience" ? " active" : ""}`}
            onClick={() => setPage("experience")}
          >Experience</a>
          <a
            href="#projects"
            className={`nav-link${page === "projects" ? " active" : ""}`}
            onClick={() => setPage("projects")}
          >Projects</a>
          <a
            href="#contact"
            className={`nav-link${page === "contact" ? " active" : ""}`}
            onClick={() => setPage("contact")}
          >Contact</a>
        </nav>
        </div>
        
        <div className="header-short">
        <h1 className="logo">PHARIT</h1>
        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={`nav-link${page === "home" ? " active" : ""}`}
            onClick={() => handleNavClick("home")}
          >Home</a>
          <a
            href="#about"
            className={`nav-link${page === "about" ? " active" : ""}`}
            onClick={() => handleNavClick("about")}
          >About</a>
          <a
            href="#experience"
            className={`nav-link${page === "experience" ? " active" : ""}`}
            onClick={() => handleNavClick("experience")}
          >Experience</a>
          <a
            href="#projects"
            className={`nav-link${page === "projects" ? " active" : ""}`}
            onClick={() => handleNavClick("projects")}
          >Projects</a>
          <a
            href="#contact"
            className={`nav-link${page === "contact" ? " active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >Contact</a>
        </nav>
      </div>
    </header>
    
  )
}

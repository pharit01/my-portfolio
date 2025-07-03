import React from 'react'
import '../styles/Header.css';

export const Header = ({ page, setPage }) => {
  return (
    <header className="header">
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
        {/* <a
          href="#projects"
          className={`nav-link${page === "projects" ? " active" : ""}`}
          onClick={() => setPage("projects")}
        >Projects</a> */}
        <a
          href="#contact"
          className={`nav-link${page === "contact" ? " active" : ""}`}
          onClick={() => setPage("contact")}
        >Contact</a>
      </nav>
    </header>
  )
}

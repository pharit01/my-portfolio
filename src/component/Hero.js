import React from "react";
import profile from "../assets/profile.jpg";
import { useTilt } from "../hooks/useTilt";
import { useTypewriter } from "../hooks/useTypewriter";

export const Hero = () => {
  const { wrapRef, cardRef } = useTilt();
  const roleText = useTypewriter();

  return (
    <header id="home" className="pf-hero">
      <div className="pf-sphere pf-sphere-1" />
      <div className="pf-sphere pf-sphere-2" />
      <div className="pf-sphere pf-sphere-3" />

      <div className="pf-tilt-wrap" ref={wrapRef}>
        <div className="pf-float">
          <div className="pf-tilt" ref={cardRef}>
            <img src={profile} alt="Pharit Sariwong" />
          </div>
        </div>
      </div>

      <div className="pf-badge">
        <span className="pf-badge-dot" />
        Available for work · 2026
      </div>

      <h1 className="pf-name">Pharit Sariwong</h1>

      <div className="pf-role">
        {roleText}
        <span className="pf-caret" />
      </div>

      <div className="pf-cta-row">
        <a className="pf-btn-dark" href="#work">View my work</a>
        <a className="pf-btn-white" href="#contact">Get in touch</a>
      </div>
    </header>
  );
};

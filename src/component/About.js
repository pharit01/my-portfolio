import React from "react";

const FRONTEND = ["HTML", "CSS", "JavaScript", "React", "REST API"];
const BACKEND = ["Java", "C# / .NET Core", "Git", "PostgreSQL", "Oracle SQL"];
const AI = ["AI-assisted development", "LLM API integration", "AI Agents & Automation"];

const ChipGroup = ({ label, items }) => (
  <div>
    <div className="pf-skill-label">{label}</div>
    <div className="pf-chips">
      {items.map((c) => (
        <span className="pf-chip" key={c}>{c}</span>
      ))}
    </div>
  </div>
);

export const About = () => (
  <section id="about" className="pf-about">
    <div className="pf-about-card">
      <div className="pf-eyebrow">
        <span className="pf-eyebrow-dot" />
        ABOUT
      </div>
      <div className="pf-about-head">
        I turn problems into clean, working products.
      </div>
      <div className="pf-about-body">
        Full Stack developer with 2+ years building and maintaining web
        applications with Java, JavaScript, and HTML. I build RESTful APIs, work
        across PostgreSQL and Oracle SQL, and enjoy the system-analysis and
        troubleshooting side of shipping — collaborating closely with
        cross-functional teams to get reliable software out the door.
      </div>
      <div className="pf-divider" />
      <div className="pf-skills">
        <ChipGroup label="FRONTEND" items={FRONTEND} />
        <ChipGroup label="BACKEND" items={BACKEND} />
        <ChipGroup label="AI" items={AI} />
      </div>
    </div>
  </section>
);

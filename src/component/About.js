import React from "react";

const FRONTEND = ["HTML", "CSS", "JavaScript", "React", "REST API"];
const BACKEND = ["Node.js", "Express", "Git", "Java", "PostgreSQL", "Oracle SQL"];

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
        Graduated with a Bachelor's in Computer Engineering. Comfortable across
        the full stack and used to coordinating closely with the people I build
        for — focused on shipping reliable software with care for the details.
      </div>
      <div className="pf-divider" />
      <div className="pf-skills">
        <ChipGroup label="FRONTEND" items={FRONTEND} />
        <ChipGroup label="BACKEND" items={BACKEND} />
      </div>
    </div>
  </section>
);

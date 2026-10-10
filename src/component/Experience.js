import React from "react";

const EXPERIENCE = [
  {
    year: "Aug 2026 – Present",
    company: "Thalent AI",
    role: "Full Stack Developer",
    points: [
      "Maintain and improve the company website",
      "Built a web application that pulls Facebook ad campaign data for tracking and reporting",
      "Develop and maintain the company's job board website",
      "Redesign and improve client websites for better usability and visual design",
      "Develop an inventory and stock management system",
      "Tech: React, Node.js, PHP, Python, LLM APIs",
    ],
  },
  {
    year: "2024 – Jul 2026",
    company: "Avalant Co., Ltd.",
    role: "Software Developer",
    points: [
      "Analyze and resolve system issues with root-cause analysis to keep performance optimal",
      "Document issues, causes, and solutions for future reference",
      "Develop and enhance web application features based on requirements",
      "Build frontends with HTML & CSS via low-code tools",
      "Develop backend systems using Java",
      "Manage databases with PostgreSQL and Oracle",
    ],
  },
  {
    year: "2022",
    company: "SUPALAI Public Company Limited",
    role: "Developer Intern",
    points: [
      "Develop and enhance frontends with HTML, CSS, and Bootstrap for better usability",
      "Build and maintain backend systems using C# and .NET Framework / .NET Core",
      "Design and implement system features from user and business requirements",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="pf-exp">
    <div className="pf-work-head">
      <div className="pf-work-title">Experience</div>
      <div className="pf-work-meta">{String(EXPERIENCE.length).padStart(2, "0")} roles</div>
    </div>
    <div className="pf-exp-list">
      {EXPERIENCE.map((e) => (
        <article className="pf-exp-item" key={e.company}>
          <div className="pf-exp-head">
            <div>
              <div className="pf-exp-company">{e.company}</div>
              <div className="pf-exp-role">{e.role}</div>
            </div>
            <div className="pf-exp-year">{e.year}</div>
          </div>
          <ul className="pf-exp-points">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

import React from "react";

const EXPERIENCE = [
  {
    year: "2024",
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
    role: "Internship · Developer Department",
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
      <div className="pf-work-meta">02 roles</div>
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

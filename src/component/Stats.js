import React from "react";

const STATS = [
  { num: "2+", label: "Years as developer" },
  { num: "13", label: "Core technologies" },
  { num: "B.Eng", label: "Computer Engineering" },
];

export const Stats = () => (
  <section className="pf-stats">
    {STATS.map((s) => (
      <div className="pf-stat" key={s.label}>
        <div className="pf-stat-num">{s.num}</div>
        <div className="pf-stat-label">{s.label}</div>
      </div>
    ))}
  </section>
);

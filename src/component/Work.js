import React from "react";
import portfolioImg from "../assets/portfolio.png";
import pokemonsImg from "../assets/Pokemons.png";

const PROJECTS = [
  {
    name: "My-Portfolio",
    meta: "React · CSS · Personal website",
    img: portfolioImg,
    href: "https://pharit01.github.io/my-portfolio/",
  },
  {
    name: "Pokémon API Explorer",
    meta: "React · REST API · Search & battle",
    img: pokemonsImg,
    href: "https://pharit01.github.io/my-portfolio/#/Pokemons",
  },
];

export const Work = () => (
  <section id="work" className="pf-work">
    <div className="pf-work-head">
      <div className="pf-work-title">Selected work</div>
      <div className="pf-work-meta">02 projects</div>
    </div>
    <div className="pf-projects">
      {PROJECTS.map((p) => (
        <a
          className="pf-proj"
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          key={p.name}
        >
          <div className="pf-proj-imgwrap">
            <img className="pf-proj-img" src={p.img} alt={p.name} />
          </div>
          <div className="pf-proj-foot">
            <div>
              <div className="pf-proj-name">{p.name}</div>
              <div className="pf-proj-meta">{p.meta}</div>
            </div>
            <div className="pf-proj-arrow">↗</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

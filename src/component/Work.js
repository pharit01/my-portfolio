import React, { useRef, useState } from "react";
import portfolioImg from "../assets/portfolio.png";
import pokemonsImg from "../assets/Pokemons.png";
import adsDashboardImg from "../assets/ads-dashboard.png";
import aiVideoEditorImg from "../assets/ai-video-editor.png";
import stockSystemImg from "../assets/stock-system.png";

// `href` is optional: client work gets a description and cover image only,
// with no link to the live (private) site.
const PROJECTS = [
  {
    name: "AI Video Editor",
    meta: "Electron · React · Next.js · TypeScript · Claude API",
    desc:
      "Mac app that turns raw talking-head footage into a ready-to-edit CapCut draft. It transcribes on-device with whisper.cpp, has Claude plan the edit, then lets you chat with an AI agent that adds text, graphics and sound to a shared timeline before writing the CapCut project.",
    img: aiVideoEditorImg,
  },
  {
    name: "Stock & Order Management",
    meta: "Next.js · TypeScript · Supabase (PostgreSQL) · Docker",
    desc:
      "Stock and order system for a product distributor, with separate executive, admin and dealer roles. Dealers order and upload payment slips; stock is deducted only when an admin confirms the slip, cancelled orders return it automatically, and every change is logged. Self-hosted with Docker, Caddy and daily backups.",
    img: stockSystemImg,
  },
  {
    name: "Ads Performance Dashboard",
    meta: "Next.js · PostgreSQL · Meta & TikTok Ads API",
    desc:
      "Client dashboard for a skincare clinic. A daily ETL pulls Facebook and TikTok ad data into PostgreSQL; the app shows spend, reach and message KPIs, daily trends and per-objective breakdowns behind a login, with alerts on unusual spend.",
    img: adsDashboardImg,
  },
  {
    name: "My-Portfolio",
    meta: "React · CSS · Personal website",
    desc:
      "This site. A single-page React portfolio with a Soft 3D look: tilting profile card, perspective grid and floating dev objects with mouse parallax, responsive down to small phones and deployed on GitHub Pages.",
    img: portfolioImg,
    href: "https://pharit01.github.io/my-portfolio/",
  },
  {
    name: "Pokémon API Explorer",
    meta: "React · REST API · Search & battle",
    desc:
      "Search any two Pokémon from PokéAPI with a keyboard-friendly autocomplete and compare them side by side, with proportional stat bars and the winner of each stat highlighted.",
    img: pokemonsImg,
    href: "https://pharit01.github.io/my-portfolio/#/Pokemons",
  },
];

const ProjectCard = ({ p }) => {
  const body = (
    <>
      <div className="pf-proj-imgwrap">
        <img className="pf-proj-img" src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className="pf-proj-foot">
        <div>
          <div className="pf-proj-name">{p.name}</div>
          <div className="pf-proj-meta">{p.meta}</div>
          <p className="pf-proj-desc">{p.desc}</p>
        </div>
        {p.href && <div className="pf-proj-arrow" aria-hidden="true">↗</div>}
      </div>
    </>
  );
  return p.href ? (
    <a className="pf-proj" href={p.href} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <article className="pf-proj">{body}</article>
  );
};

/* Horizontal scroll-snap carousel. Native scrolling does the work (swipe,
   trackpad, shift+wheel, keyboard on the focused track); the arrows and dots
   just call scrollTo, and `active` follows the scroll position. */
export const Work = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const slides = () => Array.from(trackRef.current?.children ?? []);

  const goTo = (i) => {
    const track = trackRef.current;
    const target = Math.max(0, Math.min(i, PROJECTS.length - 1));
    const slide = slides()[target];
    if (!track || !slide) return;
    // Set it directly too: near the end several slides share the same max
    // scroll position, so scrolling there may not fire a scroll event.
    setActive(target);
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    // At the far right the last slides can't snap to the start edge, so treat
    // "scrolled to the end" as the last slide.
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
      setActive(PROJECTS.length - 1);
      return;
    }
    const x = track.scrollLeft + track.offsetLeft;
    let nearest = 0;
    slides().forEach((el, i) => {
      if (Math.abs(el.offsetLeft - x) < Math.abs(slides()[nearest].offsetLeft - x)) nearest = i;
    });
    setActive(nearest);
  };

  return (
    <section id="work" className="pf-work">
      <div className="pf-work-head">
        <h2 className="pf-work-title">Selected work</h2>
        <div className="pf-work-meta">{String(PROJECTS.length).padStart(2, "0")} projects</div>
      </div>

      <div
        className="pf-carousel"
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-label="Projects, scroll sideways"
      >
        {PROJECTS.map((p) => (
          <div className="pf-slide" key={p.name}>
            <ProjectCard p={p} />
          </div>
        ))}
      </div>

      <div className="pf-carousel-nav">
        <div className="pf-dots">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              type="button"
              className={`pf-dot${i === active ? " is-active" : ""}`}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="pf-arrows">
          <button type="button" className="pf-arrow" aria-label="Previous project" disabled={active === 0} onClick={() => goTo(active - 1)}>
            ←
          </button>
          <button
            type="button"
            className="pf-arrow"
            aria-label="Next project"
            disabled={active === PROJECTS.length - 1}
            onClick={() => goTo(active + 1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

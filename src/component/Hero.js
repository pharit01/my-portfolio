import React from "react";
import profile from "../assets/profile.jpg";
import { useParallax } from "../hooks/useParallax";
import { useTilt } from "../hooks/useTilt";
import { useTypewriter } from "../hooks/useTypewriter";
import { scrollToSection } from "../utils/scrollToSection";

export const Hero = () => {
  const { wrapRef, cardRef } = useTilt();
  const roleText = useTypewriter();
  const heroRef = useParallax();

  return (
    <header id="home" className="pf-hero" ref={heroRef}>
      {/* Perspective grid floor receding toward the horizon */}
      <div className="pf-grid" aria-hidden="true">
        <div className="pf-grid-plane" />
      </div>

      {/* Floating dev objects; --depth scales each one's mouse parallax */}
      <div className="pf-shapes" aria-hidden="true">
        {/* Frontend: React component in an editor window */}
        <div className="pf-shape pf-obj-code" style={{ "--depth": 26 }}>
          <div className="pf-win pf-win-light">
            <div className="pf-win-bar"><i /><i /><i /><span>Profile.jsx</span></div>
            <pre className="pf-code">
              <span className="k">const</span> <span className="f">Dev</span> = () =&gt; ({"\n"}
              {"  "}&lt;<span className="t">Card</span>{"\n"}
              {"    "}<span className="a">role</span>=<span className="s">"Full Stack"</span>{"\n"}
              {"    "}<span className="a">ai</span>=<span className="s">"LLM APIs"</span>{"\n"}
              {"  "}/&gt;{"\n"}
              );
            </pre>
          </div>
        </div>

        {/* DevOps: the terminal that ships it */}
        <div className="pf-shape pf-obj-term" style={{ "--depth": 38 }}>
          <div className="pf-win pf-win-dark">
            <div className="pf-win-bar"><i /><i /><i /><span>zsh</span></div>
            <pre className="pf-code">
              <span className="p">$</span> npm run deploy{"\n"}
              <span className="ok">✓</span> Compiled successfully{"\n"}
              <span className="ok">✓</span> Published<span className="pf-term-caret" />
            </pre>
          </div>
        </div>

        {/* Backend: wireframe database cylinder */}
        <div className="pf-shape pf-obj-db" style={{ "--depth": 48 }}>
          <svg viewBox="0 0 80 96" fill="none">
            <ellipse cx="40" cy="14" rx="34" ry="10" />
            <path d="M6 14v68c0 5.5 15.2 10 34 10s34-4.5 34-10V14" />
            <path d="M6 37c0 5.5 15.2 10 34 10s34-4.5 34-10" />
            <path d="M6 60c0 5.5 15.2 10 34 10s34-4.5 34-10" />
          </svg>
        </div>

        {/* AI: small neural network */}
        <div className="pf-shape pf-obj-ai" style={{ "--depth": 56 }}>
          <svg viewBox="0 0 96 72" fill="none">
            <path className="pf-ai-edges" d="M10 14 48 10M10 14 48 36M10 14 48 62M10 58 48 10M10 58 48 36M10 58 48 62M48 10 86 36M48 36 86 36M48 62 86 36" />
            <circle cx="10" cy="14" r="5" /><circle cx="10" cy="58" r="5" />
            <circle cx="48" cy="10" r="5" /><circle cx="48" cy="36" r="5" /><circle cx="48" cy="62" r="5" />
            <circle className="pf-ai-out" cx="86" cy="36" r="6" />
          </svg>
        </div>

        {/* Code glyph */}
        <div className="pf-shape pf-obj-tag" style={{ "--depth": 64 }}>&lt;/&gt;</div>
      </div>

      <div className="pf-tilt-wrap" ref={wrapRef}>
        <div className="pf-float">
          <div className="pf-tilt" ref={cardRef}>
            <img src={profile} alt="Pharit Sariwong" />
          </div>
        </div>
      </div>

      <div className="pf-badge">
        <span className="pf-badge-dot" />
        Currently at Thalent AI
      </div>

      <h1 className="pf-name">Pharit Sariwong</h1>

      <div className="pf-role">
        {roleText}
        <span className="pf-caret" />
      </div>

      <div className="pf-cta-row">
        <a className="pf-btn-dark" href="#work" onClick={(e) => scrollToSection(e, "work")}>View my work</a>
        <a className="pf-btn-white" href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Get in touch</a>
      </div>
    </header>
  );
};

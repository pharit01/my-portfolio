import React, { useState } from "react";
import './App.css'
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Experience } from "./component/Experience";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

const pages = ["home", "about", "experience", /*"projects",*/ "contact"];

function App() {
  const [page, setPage] = useState("home");
  const [fade, setFade] = useState(false);
  const [slideDir, setSlideDir] = useState(""); // "left" หรือ "right"
  const currentIndex = pages.indexOf(page);

  const changePage = (newPage) => {
    if (newPage === page) return;
    const newIndex = pages.indexOf(newPage);
    const dir = newIndex > currentIndex ? "left" : "right";
    setSlideDir(dir);
    setFade(true);
    setTimeout(() => {
      setPage(newPage);
      setFade(false);
      setSlideDir("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 350);
  };

  const goPrev = () => {
    setSlideDir("right");
    setFade(true);
    setTimeout(() => {
      const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
      setPage(prevPage);
      setFade(false);
      setSlideDir("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 350);
  };

  const goNext = () => {
    setSlideDir("left");
    setFade(true);
    setTimeout(() => {
      const nextPage = pages[(currentIndex + 1) % pages.length];
      setPage(nextPage);
      setFade(false);
      setSlideDir("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 350);
  };

  return (
    <div className="app-container">
      {page !== "home" && (
        <button
          className="arrow-btn arrow-left"
          onClick={goPrev}
          aria-label="Previous Page"
        >
          <svg className="arrow-svg" viewBox="0 0 48 48">
            <line className="arrow-body" x1="36" y1="24" x2="12" y2="24" />
            <polyline className="arrow-head" points="20,16 12,24 20,32" />
          </svg>
        </button>
      )}
      <Header page={page} setPage={changePage} />
      <div className={`fade-content${fade ? ` fade-out slide-${slideDir}` : ""}`}>
        {page === "home" && <Home setPage={changePage} />}
        {page === "about" && <About />}
        {page === "experience" && <Experience />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </div>
      {page !== "contact" && (
        <button
          className="arrow-btn arrow-right"
          onClick={goNext}
          aria-label="Next Page"
        >
          <svg className="arrow-svg" viewBox="0 0 48 48">
            <line className="arrow-body" x1="12" y1="24" x2="36" y2="24" />
            <polyline className="arrow-head" points="28,16 36,24 28,32" />
          </svg>
        </button>
      )}
      <div className="app-wak"></div>
      <Footer />
    </div>
  );
}

export default App;
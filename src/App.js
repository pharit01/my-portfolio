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
  const currentIndex = pages.indexOf(page);

  const goPrev = () => {
    setPage(pages[(currentIndex - 1 + pages.length) % pages.length]);
  };

  const goNext = () => {
    setPage(pages[(currentIndex + 1) % pages.length]);
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
      <Header page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
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
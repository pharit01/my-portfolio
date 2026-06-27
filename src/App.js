import React from "react";
import "./styles/portfolio.css";
import { Nav } from "./component/Nav";
import { Hero } from "./component/Hero";
import { Stats } from "./component/Stats";
import { About } from "./component/About";
import { Work } from "./component/Work";
import { Contact } from "./component/Contact";

function App() {
  return (
    <div className="pf-page">
      <div className="pf-container">
        <Nav />
        <Hero />
        <Stats />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;

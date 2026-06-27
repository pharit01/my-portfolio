import React from "react";
import { Link } from "react-router-dom";
import "./PokeViwe.css";
import BattleViwe from "./Battle/BattleViwe";

const PokeViwe = () => (
  <div className="poke-page">
    <div className="poke-container">
      <nav className="poke-nav">
        <Link to="/" className="poke-logo">
          Pharit<span>.</span>
        </Link>
        <Link to="/" className="poke-back">← Back to portfolio</Link>
      </nav>
      <BattleViwe />
    </div>
  </div>
);

export default PokeViwe;

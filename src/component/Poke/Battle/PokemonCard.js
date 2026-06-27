import React from "react";
import { Search } from "../Search/Search";
import RangeView from "../RangeView/RangeView";

const LABELS = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

// Soft tinted badge per type: light bg + dark same-hue text.
// Every pair is verified ≥4.5:1 (WCAG AA for the 12px bold badge text).
const TYPE_COLORS = {
  normal:   { bg: "#e8e8df", fg: "#5c5c4a" },
  fire:     { bg: "#fbe2d2", fg: "#a23814" },
  water:    { bg: "#dbe7fb", fg: "#2b5bb0" },
  electric: { bg: "#f7ecc6", fg: "#7a6000" },
  grass:    { bg: "#dcefcf", fg: "#3a6e26" },
  ice:      { bg: "#d6efed", fg: "#27716e" },
  fighting: { bg: "#f4d6d4", fg: "#a52822" },
  poison:   { bg: "#ecd8eb", fg: "#8a2f88" },
  ground:   { bg: "#f0e4c4", fg: "#735716" },
  flying:   { bg: "#e4ddf9", fg: "#5a45b0" },
  psychic:  { bg: "#fbd9e5", fg: "#a82452" },
  bug:      { bg: "#e7ebc6", fg: "#5f6b0f" },
  rock:     { bg: "#ece6cd", fg: "#665a22" },
  ghost:    { bg: "#e0d9ea", fg: "#5a437a" },
  dragon:   { bg: "#ded3fb", fg: "#5326c9" },
  dark:     { bg: "#e0d8d2", fg: "#4a3a2e" },
  steel:    { bg: "#e2e2ea", fg: "#56566f" },
  fairy:    { bg: "#f6dde8", fg: "#9a3a64" },
};
const FALLBACK_TYPE = { bg: "#eeeef0", fg: "#5f5f66" };

const statTotal = (data) =>
  data?.stats?.reduce((sum, s) => sum + parseInt(s.base_stat, 10), 0) || 0;

const pickImage = (data) => {
  const other = data?.sprites?.other || {};
  return (
    other["official-artwork"]?.front_default ||
    other.dream_world?.front_default ||
    data?.sprites?.front_default ||
    ""
  );
};

export default function PokemonCard({ title, data, opponent, error, onSelect, onRandom }) {
  const ready = data && Array.isArray(data.types) && Array.isArray(data.stats);
  const total = statTotal(data);
  const opponentTotal = statTotal(opponent);

  return (
    <div className="poke-card">
      <div className="poke-card-title">{title}</div>

      <div className="poke-search-row">
        <Search onSelect={onSelect} selectedName={ready ? data.name : ""} />
        <button className="poke-random" onClick={onRandom}>
          <span aria-hidden="true">🎲</span> Random
        </button>
      </div>

      {ready ? (
        <div className="poke-info">
          <div className="poke-img-disc">
            <img className="poke-img" src={pickImage(data)} alt={data.name} />
          </div>

          <div className="poke-name">
            {data.name}
            <span className="poke-id"> #{String(data.id).padStart(3, "0")}</span>
          </div>

          <div className="poke-types">
            {data.types.map((t) => {
              const c = TYPE_COLORS[t.type.name] || FALLBACK_TYPE;
              return (
                <span
                  key={t.type.name}
                  className="poke-type"
                  style={{ background: c.bg, color: c.fg }}
                >
                  {t.type.name}
                </span>
              );
            })}
          </div>

          <div className="poke-stats">
            {LABELS.map((label, i) => {
              const mine = parseInt(data.stats[i]?.base_stat, 10) || 0;
              const theirs = opponent
                ? parseInt(opponent.stats[i]?.base_stat, 10) || 0
                : null;
              const win = theirs !== null && mine > theirs;
              return (
                <div className="poke-stat-row" key={label}>
                  <div className="poke-stat-label">{label}</div>
                  <div className={`poke-stat-val${win ? " win" : ""}`}>
                    {mine}
                    {win && <span className="poke-win-arrow" aria-hidden="true">↑</span>}
                    {win && <span className="visually-hidden"> higher</span>}
                  </div>
                  <RangeView value={mine} variant={win ? "win" : "default"} />
                </div>
              );
            })}

            <div className="poke-stat-row total">
              <div className="poke-stat-label">Total</div>
              {(() => {
                const win = opponent && total > opponentTotal;
                return (
                  <div className={`poke-stat-val${win ? " win" : ""}`}>
                    {total}
                    {win && <span className="poke-win-arrow" aria-hidden="true">↑</span>}
                    {win && <span className="visually-hidden"> higher</span>}
                  </div>
                );
              })()}
              <RangeView
                value={total}
                max={720}
                variant={opponent && total > opponentTotal ? "win" : "default"}
              />
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="poke-empty">
          <div className="poke-empty-ball" aria-hidden="true" />
          <div>Couldn't load Pokémon</div>
          <button className="poke-retry" onClick={onRandom}>Try again</button>
        </div>
      ) : (
        <div className="poke-empty">
          <div className="poke-empty-ball" aria-hidden="true" />
          <div>Search or roll a Pokémon</div>
        </div>
      )}
    </div>
  );
}

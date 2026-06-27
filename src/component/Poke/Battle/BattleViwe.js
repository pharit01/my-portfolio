import React, { useState, useEffect } from "react";
import "./BattleViwe.css";
import { fetchPokemonData } from "../api";
import PokemonCard from "./PokemonCard";

export default function BattleViwe() {
  const [player1Id, setPlayer1Id] = useState(null);
  const [player2Id, setPlayer2Id] = useState(null);
  const [player1Data, setPlayer1Data] = useState(null);
  const [player2Data, setPlayer2Data] = useState(null);
  const [player1Error, setPlayer1Error] = useState(false);
  const [player2Error, setPlayer2Error] = useState(false);

  useEffect(() => {
    if (!player1Id) return;
    let ignore = false;
    setPlayer1Error(false);
    fetchPokemonData(player1Id)
      .then((d) => { if (!ignore) setPlayer1Data(d); })
      .catch(() => { if (!ignore) { setPlayer1Data(null); setPlayer1Error(true); } });
    return () => { ignore = true; };
  }, [player1Id]);

  useEffect(() => {
    if (!player2Id) return;
    let ignore = false;
    setPlayer2Error(false);
    fetchPokemonData(player2Id)
      .then((d) => { if (!ignore) setPlayer2Data(d); })
      .catch(() => { if (!ignore) { setPlayer2Data(null); setPlayer2Error(true); } });
    return () => { ignore = true; };
  }, [player2Id]);

  // Roll a fresh id, guaranteed different from the one already shown, so the
  // dice never produces a no-op state update (which would feel like a dead click).
  const rollId = (currentId) => {
    let id = currentId;
    while (id === currentId) id = Math.floor(Math.random() * 1025) + 1;
    return id;
  };

  return (
    <div className="poke-battle-wrap">
      <header className="poke-header">
        <div className="poke-eyebrow">{"// POKÉAPI"}</div>
        <h1 className="poke-title">Pokémon Compare</h1>
        <p className="poke-sub">
          Search or roll two Pokémon and compare their base stats side by side.
        </p>
      </header>

      <div className="poke-battle">
        <PokemonCard
          title="PLAYER 01"
          data={player1Data}
          opponent={player2Data}
          error={player1Error}
          onSelect={(id) => setPlayer1Id(id)}
          onRandom={() => setPlayer1Id(rollId(player1Id))}
        />
        <div className="poke-vs">VS</div>
        <PokemonCard
          title="PLAYER 02"
          data={player2Data}
          opponent={player1Data}
          error={player2Error}
          onSelect={(id) => setPlayer2Id(id)}
          onRandom={() => setPlayer2Id(rollId(player2Id))}
        />
      </div>
    </div>
  );
}

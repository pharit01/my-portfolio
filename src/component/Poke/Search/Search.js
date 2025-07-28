import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../api";
import "./Search.css";

export const Search = ({ onSelect, selectedName = "" }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      const data = await fetchPokemons(1000, 0);
      setAllPokemons(data.results);
      setResults(data.results);
    };
    getAll();
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.trim().toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setResults(allPokemons);
      setShowDropdown(false);
    }
  }, [query, allPokemons]);

  useEffect(() => {
  if (selectedName) {
    setQuery(selectedName);
    setSelected({ name: selectedName });
  }
}, [selectedName]);

  const handleSelect = (name) => {
    const selectedPokemon = results.find((pokemon) => pokemon.name === name);
    const id = selectedPokemon?.url?.split("/").filter(Boolean).pop();
    setSelected({ name, id });
    setQuery(name);
    setShowDropdown(false);

    onSelect?.(id);
  };

  return (
    <div className="search-dropdown-container">
      <form className="search-form" autoComplete="off">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected("");
            setShowDropdown(true);
          }}
          placeholder="ค้นหาโปเกมอน..."
          onFocus={() => query && setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        />
        {showDropdown && (
          <ul className="search-dropdown-list">
            {results.slice(0, 10).map((pokemon, idx) => {
              const id = pokemon.url.split("/").filter(Boolean).pop();
              return (
                <li
                  key={idx}
                  className="search-dropdown-item"
                  onMouseDown={() => handleSelect(pokemon.name)}
                >
                  {pokemon.name} <span style={{ color: "#888" }}>#{id}</span>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};
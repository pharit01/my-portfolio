import React, { useState, useEffect, useRef } from "react";
import { fetchPokemons } from "../api";
import "./Search.css";

export const Search = ({ onSelect, selectedName = "" }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  // Set when the query changes programmatically (selection / random) so the
  // filter effect below doesn't auto-open the dropdown over the result.
  const programmaticRef = useRef(false);

  useEffect(() => {
    fetchPokemons(1000, 0)
      .then((data) => {
        setAllPokemons(data.results);
        setResults(data.results);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.trim().toLowerCase())
      );
      setResults(filtered);
      if (programmaticRef.current) {
        setShowDropdown(false);
        programmaticRef.current = false;
      } else {
        setShowDropdown(filtered.length > 0);
      }
    } else {
      setResults(allPokemons);
      setShowDropdown(false);
    }
    setHighlight(-1);
  }, [query, allPokemons]);

  useEffect(() => {
    // Sync the input when a Pokémon is set externally (random / parent).
    // Guard on `!== query` so a manual dropdown pick — where the fetched name
    // already equals the query — doesn't re-arm programmaticRef and swallow the
    // first keystroke of the next search.
    if (selectedName && selectedName !== query) {
      programmaticRef.current = true;
      setQuery(selectedName);
      setSelected({ name: selectedName });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedName]);

  const visible = results.slice(0, 10);

  const handleSelect = (name) => {
    const picked = results.find((pokemon) => pokemon.name === name);
    const id = picked?.url?.split("/").filter(Boolean).pop();
    setSelected({ name, id });
    programmaticRef.current = true;
    setQuery(name);
    setShowDropdown(false);
    onSelect?.(id);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!showDropdown && query) {
        setShowDropdown(true);
        return;
      }
      setHighlight((h) => Math.min(h + 1, visible.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (showDropdown && highlight >= 0 && visible[highlight]) {
        e.preventDefault();
        handleSelect(visible[highlight].name);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setHighlight(-1);
    }
  };

  const closeDropdown = () => {
    setShowDropdown(false);
    setHighlight(-1);
  };

  return (
    <div className="search-dropdown-container">
      <form
        className="search-form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="search-input"
          role="combobox"
          aria-label="Search Pokémon"
          aria-expanded={showDropdown && visible.length > 0}
          aria-controls={showDropdown && visible.length > 0 ? "poke-search-list" : undefined}
          aria-autocomplete="list"
          aria-activedescendant={
            showDropdown && highlight >= 0 ? `poke-opt-${highlight}` : undefined
          }
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected("");
            setShowDropdown(true);
          }}
          onKeyDown={onKeyDown}
          placeholder="Search Pokémon…"
          onFocus={() => query && setShowDropdown(true)}
          onBlur={() => setTimeout(closeDropdown, 150)}
        />
        {showDropdown && visible.length > 0 && (
          <ul className="search-dropdown-list" id="poke-search-list" role="listbox">
            {visible.map((pokemon, idx) => {
              const id = pokemon.url.split("/").filter(Boolean).pop();
              return (
                <li
                  key={pokemon.name}
                  id={`poke-opt-${idx}`}
                  role="option"
                  aria-selected={idx === highlight}
                  className={`search-dropdown-item${idx === highlight ? " is-highlighted" : ""}`}
                  onMouseDown={() => handleSelect(pokemon.name)}
                  onMouseEnter={() => setHighlight(idx)}
                >
                  {pokemon.name} <span className="search-dropdown-id">#{id}</span>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};

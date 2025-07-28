import React, { useState, useEffect } from "react";
import "./BattleViwe.css";
import { Search } from ".././Search/Search";
import { fetchPokemonData } from "../api";
import RangeView from "../RangeView/RangeView";

export default function BattleViwe() {
  const [player1Id, setPlayer1Id] = useState(null);
  const [player2Id, setPlayer2Id] = useState(null);
  const [player1Data, setPlayer1Data] = useState(null);
  const [player2Data, setPlayer2Data] = useState(null);

  const labels = [
    'HP',
    'Attack',
    'Defense',
    'Sp. Atk',
    'Sp. Def',
    'Speed',
  ];

  useEffect(() => {
    const getData = async () => {
      if (player1Id) {
        const data = await fetchPokemonData(player1Id);
        setPlayer1Data(data);
      }
    };
    getData();
  }, [player1Id]);

  const total1 = player1Data?.stats?.reduce((sum, current) => sum + parseInt(current.base_stat), 0) || 0;

  useEffect(() => {
    const getData = async () => {
      if (player2Id) {
        const data = await fetchPokemonData(player2Id);
        setPlayer2Data(data);
      }
    };
    getData();
  }, [player2Id]);
  const total2 = player2Data?.stats?.reduce((sum, current) => sum + parseInt(current.base_stat), 0) || 0;

  const getRandomId = () => Math.floor(Math.random() * 1025) + 1;

  return (
    <div className="battle-container">
      <div className="battle-container-info">Test Api Pokemons</div>
      <div className="pokemon-play-container">
        {/* Player 1 */}
        <div className="pokemon-play1-box">
          <h2>Pokemons 1</h2>
          <div className="pokemon-play1">
            <Search onSelect={(id) => setPlayer1Id(id)} selectedName={player1Data?.name || ""} />
            <button className="random-button" onClick={() => setPlayer1Id(getRandomId())}> 🎲 สุ่ม </button>
          </div>
          {player1Data && (
            <div className="pokemon-info">
              <div className="pokemon-container-image">
              <img className="pokemon-image"
                src={player1Data.sprites.other.dream_world.front_default ||
                      player1Data.sprites.other['official-artwork'].front_default}
                alt={player1Data.name}
              />
              </div>
              <p><strong>{player1Data.name}</strong> (ID: {player1Data.id})</p>
              <p>Type: {player1Data.types.map(t => t.type.name).join(", ")}</p>
              <div className="pokemon-stat-container">
                <table>
                  <tbody>
                    {labels.map((label, i ) => (
                      <tr key={ label }>
                        <td className= "pokemon-stat-td1"> { label }</td>
                        <td className= "pokemon-stat-td2">
                          <div className="pokemon-stat-td2-info">{player1Data.stats[i]?.base_stat}</div>
                          <RangeView value={ player1Data.stats[ i ]?.base_stat } />
                          </td>
                      </tr>
                    ))}
                    <tr>
                    <td className= "pokemon-stat-td1">Total</td>
                    <td className= "pokemon-stat-td2">
                      <div className="pokemon-stat-td2-info">{ total1 }</div>
                      <RangeView value={ total1 } max="600" />
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Player 2 */}
        <div className="pokemon-play2-box">
          <h2>Pokemons 2</h2>
          <div className="pokemon-play2">
            <Search onSelect={(id) => setPlayer2Id(id)} selectedName={player2Data?.name || ""} />
            <button className="random-button" onClick={() => setPlayer2Id(getRandomId())}> 🎲 สุ่ม </button>
          </div>
          {player2Data && (
            <div className="pokemon-info">
              <div className="pokemon-container-image">
              <img className="pokemon-image"
                src={player2Data.sprites.other.dream_world.front_default ||
                      player2Data.sprites.other['official-artwork'].front_default}
                alt={player2Data.name}
              />
              </div>
              <p><strong>{player2Data.name}</strong> (ID: {player2Data.id})</p>
              <p>Type: {player2Data.types.map(t => t.type.name).join(", ")}</p>
              <table>
                <tbody>
                    {labels.map((label, i ) => (
                      <tr key={ label }>
                        <td className= "pokemon-stat-td1"> { label }</td>
                        <td className= "pokemon-stat-td2">
                          <div className="pokemon-stat-td2-info">{player2Data.stats[i]?.base_stat}</div>
                          <RangeView value={ player2Data.stats[ i ]?.base_stat } />
                          </td>
                      </tr>
                    ))}
                    <tr>
                    <td className= "pokemon-stat-td1">Total</td>
                    <td className= "pokemon-stat-td2">
                      <div className="pokemon-stat-td2-info">{ total2 }</div>
                      <RangeView value={ total2 } max="600" />
                    </td>
                  </tr>
                  </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


//sprites.front_default รูปโปเกมอนที่แสดงในหน้าจอการต่อสู้
//name ชื่อโปเกมอนที่แสดงในหน้าจอการต่อสู้
//stats.hp ค่า HP ของโปเกมอนที่แสดงในหน้าจอการต่อสู้
//stats.attack ค่าโจมตีของโปเกมอนที่แสดงในหน้าจอการต่อสู้
//stats.defense ค่าการป้องกันของโปเกมอนที่แสดงในหน้าจอการต่อสู้
//stats.speed ค่าความเร็วของโปเกมอนที่แสดงในหน้าจอการต่อสู้
//types ประเภทของโปเกมอนที่แสดงในหน้าจอการต่อสู้

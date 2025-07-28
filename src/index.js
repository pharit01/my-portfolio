import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'; // แสดง Portfolio
import PokeViwe from './component/Poke/PokeViwe'; // แสดง Battle Pokémon
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/my-portfolio" element={<App />} />
        <Route path="/Pokemons" element={<PokeViwe />} />
        <Route path="*" element={<App />} /> {/* fallback ไปหน้า Portfolio */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

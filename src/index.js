import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import PokeViwe from './component/Poke/PokeViwe';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Pokemons" element={<PokeViwe />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();

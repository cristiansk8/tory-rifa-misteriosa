// pages/Sorteo.js
'use client'
import React, { useState } from 'react';
import { participantes } from '../../data';

function realizarSorteo(participantes, numGanadores) {
  const listaSorteo = [];
  participantes.forEach(participante => {
    for (let i = 0; i < participante.boletas; i++) {
      listaSorteo.push(participante);
    }
  });

  const ganadores = new Set();
  while (ganadores.size < numGanadores) {
    const indiceGanador = Math.floor(Math.random() * listaSorteo.length);
    ganadores.add(listaSorteo[indiceGanador]);
  }

  return Array.from(ganadores);
}

const Sorteo = () => {
  const [ganadores, setGanadores] = useState([]);

  const handleSorteo = () => {
    const ganadores = realizarSorteo(participantes, 3);
    setGanadores(ganadores);
  };

  return (
    <div>
      <p>El sorteo es este miercoles 5 de junio </p>
      <img src="/location.png" width="60" height="60" alt="logo" />
      <h1>Lugar: Nicolas de federman</h1>
      <button onClick={handleSorteo}>Prueba tu suerte</button>
      <h2>Ganadores:</h2>
        {ganadores.map((ganador, index) => (
            <p>{ganador.email}</p>
        ))}
    </div>
  );
};

export default Sorteo;

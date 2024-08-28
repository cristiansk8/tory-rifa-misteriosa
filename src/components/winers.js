'use client';
import React, { useState } from 'react';
import { participantes } from '../../data';
import Image from 'next/image'


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

function ocultarTexto(text, startLen, endLen) {
  const totalLen = text.length;
  if (totalLen <= startLen + endLen) return text;
  const start = text.substring(0, startLen);
  const end = text.substring(totalLen - endLen, totalLen);
  const middle = '*'.repeat(totalLen - startLen - endLen);
  return `${start}${middle}${end}`;
}

function cifrarGanador(ganador) {
  return {
    ...ganador,
    nombre: ocultarTexto(ganador.nombre, 3, 3),
    email: ocultarTexto(ganador.email, 3, 3),
    telefono: ocultarTexto(ganador.telefono, 3, 3)
  };
}

const Sorteo = () => {
  const [ganadores, setGanadores] = useState([]);
  const [error, setError] = useState(null);

  const handleSorteo = () => {
      const ganadoresOriginales = realizarSorteo(participantes, 3);
      const ganadoresCifrados = ganadoresOriginales.map(cifrarGanador);
      setGanadores(ganadoresCifrados);
      setError(null);

  };

  return (
    <div>
      <p>El sorteo es este miércoles 5 de junio</p>
      <Image
      src="/location.png"
      width={60}
      height={60}
      alt="location-rifa-tory"
    />
      <h1>Lugar: "pronto sera anunciado"</h1>
      <button onClick={handleSorteo}>Prueba tu suerte</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Ganadores:</h2>
      {ganadores.map((ganador, index) => (
        <div key={index}>
          <p>Ganador {index + 1}</p>
          <p>Nombre: {ganador.nombre}</p>
          <p>Email: {ganador.email}</p>
          <p>Email: {ganador.telefono}</p>
          <p>-----</p>
        </div>
      ))}
    </div>
  );
};

export default Sorteo;

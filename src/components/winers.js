/* eslint-disable react/no-unescaped-entities */
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

  // Verifica si hay suficientes participantes para el sorteo
  if (listaSorteo.length < numGanadores) {
    return [];
  }

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
    nombre: ocultarTexto(ganador.nombre, 10, 10),
    email: ocultarTexto(ganador.email, 3, 3),
    telefono: ocultarTexto(ganador.telefono, 3, 3)
  };
}

const Sorteo = () => {
  const [ganadores, setGanadores] = useState([]);
  const [error, setError] = useState(null);

  const handleSorteo = () => {
    try {
      const ganadoresOriginales = realizarSorteo(participantes, 2);
      console.log('Ganadores originales:', ganadoresOriginales); // Verifica los ganadores originales
      if (ganadoresOriginales.length === 0) {
        setError('No hay suficientes participantes para el sorteo.');
        return;
      }
      const ganadoresCifrados = ganadoresOriginales.map(cifrarGanador);
      setGanadores(ganadoresCifrados);
      setError(null);
    } catch (err) {
      console.error('Error en el sorteo:', err); // Muestra errores en la consola
      setError('Hubo un problema al realizar el sorteo.');
    }
  };

  return (
    <div>
      <p>El sorteo es este martes 15 de octubre</p>
      <Image
        src='/location.png'
        width={60}
        height={60}
        alt='location-rifa-tory'
      />
      <h1>Lugar: "pronto sera anunciado"</h1>
      <button onClick={handleSorteo}>Prueba tu suerte</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Ganadores:</h2>
      {ganadores.length > 0 ? (
        ganadores.map((ganador, index) => (
          <div key={index}>
            <b>¡ Felicidades !</b>
            <p>Nombre: {ganador.nombre}</p>
            <p>Email: {ganador.email}</p>
            <p>Teléfono: {ganador.telefono}</p>
            <p>-----</p>
          </div>
        ))
      ) : (
        <p>No hay ganadores aún.</p>
      )}
    </div>
  );
};

export default Sorteo;


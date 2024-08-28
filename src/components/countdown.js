// src/components/CountdownTimer.js
'use client';

import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    console.log('Fecha actual:', now);
    console.log('Fecha de destino:', targetDate);
    console.log('Diferencia:', difference);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      {timeLeft.days !== undefined ? (
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      ) : (
        <span>¡Tiempo terminado!</span>
      )}
    </div>
  );
}

export default CountdownTimer;

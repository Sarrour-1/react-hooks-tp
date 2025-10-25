import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return <p>Heure actuelle : {time.toLocaleTimeString()}</p>;
}

export default Time;

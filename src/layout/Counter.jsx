import React from 'react'
import { useEffect, useState } from 'react';

export default function Counter({setShowNav}) {

  const [counter, setCounter] = useState(0);

  // Third Attempts
  useEffect(() => {
    counter === 100 && setShowNav(true);
    const timer =
      counter < 100 && setInterval(() => setCounter(counter + 1), 50);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className='absolute top-20 left-40'>
      <div className='text-9xl font-bold text-slate-800'>{counter} %</div>
    </div>
  );
}

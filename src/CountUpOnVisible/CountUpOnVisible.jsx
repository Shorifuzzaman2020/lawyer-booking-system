import React, { useEffect, useRef, useState } from 'react';

const CountUpOnVisible = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const step = Math.ceil(target / 100);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return (
    <h1 ref={ref} className='text-start text-4xl font-bold mt-3 mb-3'>
      {count}+
    </h1>
  );
};

export default CountUpOnVisible;

import { useState, useEffect } from "react";

export function useCounter(targetValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetValue === 0) {
      setCount(0);
      return;
    }

    const increment = targetValue / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return count;
}

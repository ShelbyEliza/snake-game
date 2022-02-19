import { useState, useEffect, useRef } from "react";

export const useDirection = (isGamePaused, inputDirection) => {
  const [direction, setDirection] = useState(inputDirection);
  const [count, setCount] = useState(0);

  const inputRef = useRef("ArrowDown");

  useEffect(() => {
    console.log(isGamePaused);
    if (isGamePaused) {
      setCount(0);
    }
    if (!isGamePaused) {
      const id = setInterval(() => {
        if (inputRef.current !== inputDirection) {
          setDirection(inputDirection);
        }
        setCount((c) => c + 1);
      }, 1500);

      return () => clearInterval(id);
    }
  }, [isGamePaused, inputDirection, count]);

  return { direction: direction, count: count };
};

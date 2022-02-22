import { useState, useEffect } from "react";

export const useTimer = (isGamePaused) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isGamePaused) {
      setTimer(0);
    }
    const id = setInterval(() => {
      if (!isGamePaused) {
        setTimer((c) => c + 1);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [isGamePaused]);

  return { timer };
};
